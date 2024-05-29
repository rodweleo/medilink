import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase/firebase.config.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import africastalking from "africastalking";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import  rateLimit from "express-rate-limit";
import {logger } from "./middleware/logger.js"
import moment from  "moment"
import validator from 'validator';

const supabase_client = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const apiRateLimiter = rateLimit({
  windowMs: 15,
  max: 100,
  message: 'Too many request from this IP'
})

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const app = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:5173', 'https://medilinc.vercel.app']
app.use(
  cors({
    origin: "*",
  })
);


const checkAccess = (req, res, next) => {
  const action = req.query.action;

  if(action === undefined){
    next()
  }else{
    res.status(403).json({
      status: false,
      message: "Forbidden"
    })
  }
}


app.use(async (req, res, next) => {
  const { data, error} = await supabase_client.auth.getSession()
  const {session} = data;
  const headers = req.headers;
  const token = headers["Authorization"]

  //console.log(token)
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');

    logger.info(`${req.method} ${req.originalUrl} ${req.get("host")}`)
    
    //save the log into the database
    /*await supabase_client
    .from('server_logs')
    .insert([
      { 
        level: 'info', 
        message: 'otherValue', 
        req_method: req.method, 
        req_path: req.originalUrl, 
        req_host: req.get("host"), 
        req_timestamp: moment(), 
        access_token: session?.access_token,
        user_id: session?.user.id 
      },
    ])*/
    next()

    /*res.status(401).send({
      status: false,
      message: 'Access Denied: No Token Provided!'
    })*/
})

//app.use(apiRateLimiter)
//app.use(checkAccess)


const authenticateUserByPhoneNumber = async (phoneNumber) => {
  const q = query(
    collection(db, "users"),
    where("phone_number", "==", phoneNumber)
  );
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const user = data[0];

  return user;
};

app.get("/", (req, res) => {
  res.send(`Server is live`);
});

app.get("/session", async (req, res) => {
  const {data, status, error} = await supabase_client.auth.getSession();

  res.json(data)
})

app.post("/login", async (req, res) => {
  //validate the login credentials before handling anything
  const { email, password} = req.body;
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  ///^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])(?!.*([A-Za-z])\1)[A-Za-z\d@$!%*?&]{8,}$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  if(email === undefined && password === undefined){
    logger.error(`Email address and password missing`)
    res.status(400).json({
      status: false,
      error: {
        message: 'Email address and password missing'
      }
    })
  }else if(email === undefined){
    logger.error(`Email address is missing`)
    res.status(400).json({
      status: false,
      error: {
        message: 'Email address is missing'
      }
    })
  }else if( password === undefined){
    logger.error(`Password is missing`)
    res.status(400).json({
      status: false,
      error: {
        message: 'Password is missing'
      }
    })
  }

  //CHECK IF THE EMAIL PROVIDED IS A VALID EMAIL
  if(emailRegex.test(email) && validator.isEmail(email)){

    //test the password
    if(passwordRegex.test(password)){
      let { data, error} = await supabase_client.auth.signInWithPassword({
        email: email,
        password: password
      })
    
        if(error){
          logger.error(error)
          res.status(error.status).json({
            status : false, 
            error: {
              ...error,
              message: error.message
            },
          })
        }else{
          logger.info(`${data.user.email} has successfully signed in.`)
          res.status(200).json({
            status : true,
            ...data
          })
        }
    }else{
      logger.error(`${password} is not a valid password`)
      res.status(400).json({
        status: false,
        error: {
          message: 'Invalid password'
        }
      })
    }
    
  }else{
      logger.error(`${email} is not a valid email address`)
      res.status(400).json({
        status: false,
        error: {
          message: 'Invalid email address'
        }
      })
  }
    
})

app.post("/logout", async (req, res) => {
  const { error } =  await supabase_client.auth.signOut();
  if(error){
    res.status(500).json(error)
  }

  res.status(200).json({
    message: "You've been signed out."
  })
})

app.get("/doctors", async (req, res) => {
  let { data, error, status } = await supabase_client
    .from("doctors")
    .select();

  if (error) {
    logger.error(`Error: ${error}`)
    res.status(status).json(data);
  }
  res.status(status).json({
    doctors: data,
  });
})

app.get("/healthcare-facilities", async (req, res) => {
  let { data, error, status } = await supabase_client
    .from("healthcare_facilities")
    .select();

  if (error) {
    res.status(status).json(data);
  }

  res.status(status).json({
    healthcare_facilities: data,
  });
});

app.get("/distance", async (req, res) => {
  const { origins, destinations } = req.query;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${
        destinations.latitude + "," + destinations.longitude
      }&origins=${
        origins.latitude + "," + origins.longitude
      }&units=imperial&key=${process.env.GOOGLE_API_KEY}`
    );
    res.status(200).json({
      distance: response.data.rows[0].elements[0].distance,
      duration: response.data.rows[0].elements[0].duration,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

app.post("/ai-chat", async (req, res) => {
  const { query } = req.body;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  /*const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Act as an AI-powered medical consultant called Meli offering medical consultancy. ",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });*/

  //const result = await chat.sendMessage(query);
  const result = await model.generateContent(query);
  const response = result.response;
  const text = response.text();
  res.status(200).json({
    reply: text,
  });
});

app.get("/serverLogs", async (req, res) => {
  let { data, error, status } = await supabase_client
    .from("server_logs")
    .select();

  if (error) {
    logger.error(`Error: ${error}`)
    res.status(status).json(data);
  }
  res.status(status).json({
    server_logs: data,
  });
})

const africasTalkingOptions = {
  apiKey: process.env.AFRICA_TALKING_API_KEY,
  username: process.env.AFRICA_TALKING_SMS_USERNAME,
};
const AfricasTalking = africastalking(africasTalkingOptions);

const sendSMS = async (receiver, content) => {
  const sms = AfricasTalking.SMS;
  const sms_options = {
    to: receiver,
    message: content,
  };
  const response = await sms.send(sms_options);

  return response;
};

app.get("/appointments", async (req, res) => {

  let filter = {};
  Object.entries(req.query).forEach(([key, value]) => {
    filter[key] = value;
  });
  if (Object.entries(req.query).length > 0) {
    let { data, error, status } = await supabase_client
      .from("appointments")
      .select()
      .match(filter)

    if (error) {
      res.status(500).json(data);
    } else {
      res.status(200).json({
        appointments: data,
      });
    }
  } else {
    let { data, error, status } = await supabase_client
      .from("appointments")
      .select();

    if (error) {
      res.status(500).json(data);
    } else {
      res.status(200).json({
        appointments: data,
      });
    }
  }
});

app.get("/doctors", async (req, res) => {
  if (Object.entries(req.params).length > 0) {
    let { data, error, status } = await supabase_client
      .from("doctors")
      .select()
      .eq("id", req.params.doctorId);

    if (error) {
      res.status(500).json(data);
    } else {
      res.status(200).json({
        doctors: data,
      });
    }
  } else {
    let { data, error, status } = await supabase_client
      .from("doctors")
      .select();

    if (error) {
      res.status(500).json(data);
    } else {
      res.status(200).json({
        doctors: data,
      });
    }
  }
});

app.get("/prescriptions", async (req, res) => {
  if (Object.entries(req.params).length > 0) {
    let { data, error, status } = await supabase_client
      .from("prescriptions")
      .select()
      .eq("patient_id", req.params.patientId);

    if (error) {
      res.status(500).json(data);
    } else {
      res.status(200).json({
        prescriptions: data,
      });
    }
  } else {
    let { data, error, status } = await supabase_client
      .from("prescriptions")
      .select();

    if (error) {
      res.status(500).json(data);
    } else {
      res.status(200).json({
        prescriptions: data,
      });
    }
  }
});

app.get("/patients", async (req, res) => {
  let filter = {};
  Object.entries(req.query).forEach(([key, value]) => {
    filter[key] = value;
  });
  if (Object.entries(req.query).length > 0) {
    let { data, error, status } = await supabase_client
      .from("patients")
      .select()
      .match(filter)

    if (error) {
      res.status(500).json({
        status: false,
        ...error
      });
    } else {
      res.status(200).json({
        status: true,
        patients: data,
      });
    }
  } else {
    let { data, error, status } = await supabase_client
      .from("patients")
      .select();

    if (error) {
      
      res.status(500).json(data);
    } else {
      res.status(200).json({
        status: true,
        patients: data,
      });
    }
  }
});

app.get("/medicalRecords", async (req, res) => {
  let filter = {};
  Object.entries(req.query).forEach(([key, value]) => {
    filter[key] = value;
  });
  if (Object.entries(req.query).length > 0) {
    let { data, error, status } = await supabase_client
      .from("medical_records")
      .select()
      .match(filter)

    if (error) {
      logger.error(error)
      res.status(500).json({
        status: false,
        ...error
      });
    } else {
      if(data.length === 0){
        logger.error(`Medical records not found for ${filter}`)
        res.status(404).json({
          status: false,
          medicalRecords: data,
        });
      }else{
        logger.info(`${data.length} medical records requested by `)
        res.status(200).json({
          status: true,
          medicalRecords: data,
        });
      }
    }
  } else {
    let { data, error, status } = await supabase_client
      .from("medical_records")
      .select();

    if (error) {
      res.status(500).json({
        status: false,
        ...error
      });
    } else {
      res.status(200).json({
        status: true,
        patients: data,
      });
    }
  }
});

app.post("/ussd/callback", async (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  const formatted_phone_number = Number(phoneNumber.replace("+", "").trim());
  const user = await authenticateUserByPhoneNumber(formatted_phone_number);

  let response = "";

  if (user === null) {
    if (text == "") {
      response = `CON You don't have an account
            Register as
            1. Driver
            2. User
        `;
    } else if (text == "1") {
      response = `CON Enter your Name and National ID Number
            (Separated by commas)
            `;
    } else if (text.substring(0, 2) == "1*") {
      const name = text.split("*")[1].split(",")[0];
      const id_number = text.split("*")[1].split(",")[1];

      const user = {
        name: name,
        id_number: Number(id_number),
        phone_number: formatted_phone_number,
        role: "deliverer",
      };

      //SAVE THE DETAILS TO THE DATABASE
      const doc_id = await createUser(user);

      response = `END Success
                    Registration was successful.
                    Your Driver Id is ${doc_id}
                `;
    } else if (text == "2") {
      response = `END Register as a user.`;
    }
  } else {
    //get the role of the user
    const user_role = user.role;

    //fetch the orders for the active user
    const orders = await fetchDriverOrders(formatted_phone_number);
    const number_of_orders = orders.length;

    if (text == "") {
      response = `CON Welcome ${user.name}
            1. View Orders
            2. Check Order Details
        `;
    } else if (text == "1") {
      response = `CON You have ${number_of_orders} orders. 
            1. Active Orders
            2. Completed Orders
        `;
    } else if (text == "2") {
      response = `CON Kindly enter the order number:
        `;
    } else if (text == "1*1") {
      //sign order completion or cancelletion
      response = `END You have ${number_of_orders} active orders.
            ${orders.map((order, index) => `${index + 1}. ${order.id} \n`)}
            `;
    } else if (text.startsWith(2)) {
      //get the input order number
      const order_id = text.split("*")[1];

      //FETCH THE DETAILS OF THE ORDER
      const order_details = await fetchOrderDetails(order_id);

      if (order_details === null) {
        response = `END 
                Order ${order_id} details not found.
            `;
      } else {
        //send the details of the order to the driver on reuest
        await sendSMS(
          phoneNumber,
          `Order Details: \n
                id: ${order_id}
                Ordered By: ${order_details.orderer} 
                Ordered on: 
                    \t ${order_details.created_on}
                Expected Delivery Time: 
                    \t ${order_details.expected_delivery_time}
                Receipient: ${order_details.receiver}
                Products: 
                    ${order_details.products.map(
                      (product, index) => `${index + 1}. ${product} \n`
                    )}
                Shipping Address:
                    \t Location: ${order_details.shipping_address.location}
                    \t County: ${order_details.shipping_address.county}
                Status: ${
                  order_details.is_delivered ? "Delivered" : "Not Delivered"
                }`
        );

        response = `END Order Details: \n
                        id: ${order_id}
                        Ordered By: ${order_details.orderer} 
                        Ordered on: 
                            \t ${order_details.created_on}
                        Expected Delivery Time: 
                            \t ${order_details.expected_delivery_time}
                        Receipient: ${order_details.receiver}
                        Products: 
                            ${order_details.products.map(
                              (product, index) => `${index + 1}. ${product} \n`
                            )}
                        Shipping Address:
                            \t Location: ${
                              order_details.shipping_address.location
                            }
                            \t County: ${order_details.shipping_address.county}
                        Status: ${
                          order_details.is_delivered
                            ? "Delivered"
                            : "Not Delivered"
                        }
                        
                    `;
      }
    }
  }

  // Send the response back to the API
  res.set("Content-Type: text/plain");
  res.send(response);
});

app.post("/sms/callback", async (req, res) => {
  const data = req.body;
  res.send(
    "More details have been sent to your phone number: " + JSON.stringify(data)
  );
});

app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is listening on port ${process.env.PORT}`);
});
