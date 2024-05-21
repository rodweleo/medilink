import express from "express";
import dotenv from "dotenv";
dotenv.config()
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase/firebase.config.js";
import bodyParser from "body-parser";
import africastalking from "africastalking";


const app = express();
//app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))





const authenticateUserByPhoneNumber = async (phoneNumber) => {
    const q = query(collection(db, "users"), where("phone_number", "==", phoneNumber));
    const querySnapshot = await getDocs(q);

    if(querySnapshot.empty){
        return null
    }

    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

    const user = data[0];

    return user

}






app.get("/", async (req, res) => {
    res.send('The MediLink Server is live now.')
})

app.get("/health-facilities", (req, res) => {
    res.send('Health facilities api endpoint')
})


const africasTalkingOptions = {
    apiKey: process.env.AFRICA_TALKING_API_KEY,
    username: process.env.AFRICA_TALKING_SMS_USERNAME,
}
const AfricasTalking = africastalking(africasTalkingOptions)

const sendSMS = async (receiver, content) => {
    const sms = AfricasTalking.SMS;
    const sms_options = {
        to: receiver,
        message: content,
    }
    const response = await sms.send(sms_options)
    
    return response;
}




app.post("/ussd/callback", async (req, res) => {
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    const formatted_phone_number = Number(phoneNumber.replace("+", "").trim())
    const user = await authenticateUserByPhoneNumber(formatted_phone_number)

    let response = ''; 

    if(user === null){
        if(text == ""){
            response = `CON You don't have an account
            Register as
            1. Driver
            2. User
        `
        }else if(text == "1"){
            response = `CON Enter your Name and National ID Number
            (Separated by commas)
            `
        }else if(text.substring(0, 2) == "1*"){
            const name = text.split("*")[1].split(",")[0]
            const id_number = text.split("*")[1].split(",")[1]

            const user = {
                name: name,
                id_number: Number(id_number),
                phone_number: formatted_phone_number,
                role: "deliverer"
            }

            //SAVE THE DETAILS TO THE DATABASE
            const doc_id = await createUser(user);

            response = `END Success
                    Registration was successful.
                    Your Driver Id is ${doc_id}
                `

        }else if(text == "2"){
            response = `END Register as a user.`
        }

    }else{

        //get the role of the user
        const user_role = user.role;

        //fetch the orders for the active user
    const orders = await fetchDriverOrders(formatted_phone_number)
    const number_of_orders = orders.length;


    if (text == '') {
        response = `CON Welcome ${user.name}
            1. View Orders
            2. Check Order Details
        `;
    }  else if (text == "1"){
    
        response = `CON You have ${number_of_orders} orders. 
            1. Active Orders
            2. Completed Orders
        `
    } else if(text == "2"){
        response = `CON Kindly enter the order number:
        `
    }else if(text == "1*1"){
        //sign order completion or cancelletion
        response = `END You have ${number_of_orders} active orders.
            ${orders.map((order, index) => (
                `${index + 1}. ${order.id} \n`
            ))}
            `
    }else if(text.startsWith(2)){
        //get the input order number
        const order_id = text.split("*")[1]

        //FETCH THE DETAILS OF THE ORDER
        const order_details = await fetchOrderDetails(order_id);

        if(order_details === null){
            response = `END 
                Order ${order_id} details not found.
            `
        }else{
            //send the details of the order to the driver on reuest
            await sendSMS(phoneNumber, `Order Details: \n
                id: ${order_id}
                Ordered By: ${order_details.orderer} 
                Ordered on: 
                    \t ${order_details.created_on}
                Expected Delivery Time: 
                    \t ${order_details.expected_delivery_time}
                Receipient: ${order_details.receiver}
                Products: 
                    ${order_details.products.map((product, index) => (
                        `${index + 1}. ${product} \n`
                ))}
                Shipping Address:
                    \t Location: ${order_details.shipping_address.location}
                    \t County: ${order_details.shipping_address.county}
                Status: ${order_details.is_delivered ? "Delivered" : "Not Delivered"}`
            )

            response = `END Order Details: \n
                        id: ${order_id}
                        Ordered By: ${order_details.orderer} 
                        Ordered on: 
                            \t ${order_details.created_on}
                        Expected Delivery Time: 
                            \t ${order_details.expected_delivery_time}
                        Receipient: ${order_details.receiver}
                        Products: 
                            ${order_details.products.map((product, index) => (
                                `${index + 1}. ${product} \n`
                        ))}
                        Shipping Address:
                            \t Location: ${order_details.shipping_address.location}
                            \t County: ${order_details.shipping_address.county}
                        Status: ${order_details.is_delivered ? "Delivered" : "Not Delivered"}
                        
                    `   
        }
    }
    
    }

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response)

})

app.post("/sms/callback", async (req, res) =>{
    const data = req.body;
    res.send("More details have been sent to your phone number: " + JSON.stringify(data))
})


app.listen(process.env.PORT, () => {
    console.log(`[server]: Server is listening on port ${process.env.PORT}`)
})