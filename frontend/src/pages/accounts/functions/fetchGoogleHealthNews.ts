import axios from "axios";

//https://newsnow.p.rapidapi.com/newsv2_top_news_cat
export const fetchGoogleHealthNews = async () => {
  try {
    const response = await axios.post(
      ``,
      {
        category: "HEALTH",
        location: "",
        language: "en",
        page: 1,
      },
      {
        headers: {
          "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
          "Content-Type": "application/json",
          "x-rapidapi-key":
            "28406bcc59msh84fa6373af7d92ep1c75c5jsn9855207fea39",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error
  }
};
