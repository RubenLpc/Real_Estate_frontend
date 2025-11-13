import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
//baseURL: "https://real-estate-backend-l3m1.onrender.com/api"
//baseURL: "http://localhost:8000/api"
baseURL: "https://api.dan-real.immo/api"

});

export const sendKontaktForm = async (formData) => {
  try {
    // formData: { vorname, nachname, email, telefon, nachricht }
    const res = await api.post("/mail/kontakt", formData);
    toast.success("Ihre Nachricht wurde erfolgreich versendet!");
    return res.data;
  } catch (error) {
    toast.error("Fehler beim Versenden des Kontaktformulars.");
    throw error;
  }
};


export const sendInquiry = async (formData) => {
  try {
    const res = await api.post("/mail/send", formData);
    toast.success("Ihre Anfrage wurde erfolgreich versendet!");
    return res.data;
  } catch (error) {
    toast.error("Fehler beim Versenden des Formulars.");
    throw error;
  }
};

export const sendPropertyContact = async (contactData) => {
  try {
    const res = await api.post("/mail/send/booking", contactData);
    toast.success("Ihre Kontaktanfrage wurde erfolgreich versendet!");
    return res.data;
  } catch (error) {
    toast.error("Fehler beim Versenden des Kontaktformulars.");
    throw error;
  }
};

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getAllAvailableProperties = async () => {
  try {
    const response = await api.get("/residency/allresdav", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getResidency= async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    await api.post(
      `/user/register`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/removeBooking/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");

    throw error;
  }
};

export const toFav = async (id, email, token) => {
  try {
    await api.post(
      `/user/toFav/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};


export const getAllFav = async (email, token) => {
  if(!token) return 
  try{

    const res = await api.post(
      `/user/allFav`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      
    return res.data["favResidenciesID"]

  }catch(e)
  {
    toast.error("Something went wrong while fetching favs");
    throw e
  }
} 


export const getAllBookings = async (email, token) => {
  
  if(!token) return 
  try {
    const res = await api.post(
      `/user/allBookings`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["bookedVisits"];

    
  } catch (error) {
    toast.error("Something went wrong while fetching bookings");
    throw error
  }
}


export const createResidency = async (data) => {
  try {
    const res = await api.post(`/residency/create`,  data );
    return res.data;
  } catch (error) {
    toast.error("Fehler beim Speichern.");
    throw error;
  }
};

export const deleteProperty = async (id, token) => {
  const res = await api.delete(`/residency/delete/${id}`, {  // folosește `api.delete`
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateResidency = async (id, data) => {
  try {
    const res = await api.put(`/residency/update/${id}`, data);
    toast.success("Immobilie erfolgreich aktualisiert!");
    return res.data;
  } catch (error) {
    toast.error("Fehler beim Aktualisieren der Immobilie.");
    throw error;
  }
};
