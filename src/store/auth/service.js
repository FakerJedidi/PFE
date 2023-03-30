import { createAsyncThunk } from "@reduxjs/toolkit";
import { Settings } from "react-native";

interface PayloadUserSignIn {
  key: string;
}

interface ResponseSignIn {
  key: string;
  settings: any;
  settingsPause: any;
  users: any;
  error: boolean;
  messages?: string;
}

export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (payload: PayloadUserSignIn, { rejectWithValue }) => {
    try {
      // Call your authentication API to sign in the user using email and password
      const { codeLicense} = payload;
     // const response = await api.post<ResponseSignIn>(loginUrl, { key: License });
     if (code  =='1111111111111111' && code == '0000000000000000') {

      const t= {
        "__v":0,
      "_id":"5d1cd58cebfdb009a9fd372c",
      "active":true,
      "address":"87 Boulevard de Grenelle",
      "codeNaf":"9319Z",
      "created_at":"2019-07-03T16:19:24.024Z",
      "deleted":false,
      "lastSync":"2023-03-25T10:26:00.612Z",
      "license":{
         "__v":0,
         "_id":"5d1cd58bebfdb009a9fd372b",
         "active":true,
         "address":"87 Boulevard de Grenelle",
         "chantierOn":false,
         "codeNaf":"9319Z",
         "created_at":"2019-07-03T16:19:23.947Z",
         "deleted":false,
         "enseigne":"Equipe de France",
         "numeroTva":"FR43303742480",
         "owner":null,
         "planningOn":true,
         "siret":"30374248000062",
         "type":"demo",
         "updatedAt":"2023-03-13T12:20:19.242Z",
         "ville":"Paris",
         "zipCode":"75015"
      },
      "name":"Marseille",
      "numeroTva":"FR43303742480",
      "serialKey":"GUEU-X5QK-F9DF-QEDZ",
      "siret":"30374248000062",
      "updatedAt":"2023-03-25T10:26:00.612Z",
      "ville":"Paris",
      "zipCode":"75015"
      };
      const t1= {"__v":0,
      "_id":"5d1cd77b9e27004ffb54377e",
      "changementShift":true,
      "created_at":"2019-07-03T16:27:39.045Z",
      "daysPerMonth":27,
      "fermeture":"02:00",
      "joursConge":"6",
      "joursIndisponibilite":"2",
      "multiplePlanning":true,
      "ouverture":"08:00",
      "paie":true,
      "pause":"25",
      "payed":true,
      "register":true,
      "salaries":"daily",
      "site":"5d1cd58cebfdb009a9fd372c",
      "updatedAt":"2023-03-15T10:53:27.401Z"};
      const t2= { "__v":0,
      "_id":"5d1cd77b9e27004ffb54377c",
      "alerttime":"217",
      "alerttimego":"1",
      "allowCameAfter":false,
      "allowCameBefore":true,
      "allowGoAfter":false,
      "allowGoBefore":false,
      "allowPauses":true,
      "comments":true,
      "created_at":"2019-07-03T16:27:39.043Z",
      "downloadPlanningFromMobile":true,
      "employeeConges":false,
      "employeeIndisponibility":false,
      "mustGoPause":false,
      "mustGoPauseTime":3,
      "repas":true,
      "seeOthersPlanning":true,
      "showOnlyThisMonthRapport":false,
      "signatureDepartArriver":true,
      "signaturePauses":false,
      "site":"5d1cd58cebfdb009a9fd372c",
      "takePhoto":false,
      "toleranceCame":"11",
      "toleranceGo":"0",
      "updatedAt":"2023-03-25T10:20:56.787Z",
      "useIt":true,
      "validateWeek":true};
      const t3= [ {
        "_id":"5d1cd5bfebfdb009a9fd372e",
        "fname":"Noel",
        "lname":"Le graet",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1676894595019.jpeg",
        "pin":"1988",
        "role":"Administrator"
     },
     {
        "_id":"5d1cd6caebfdb009a9fd3730",
        "fname":"Hugo1",
        "lname":"Loris",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1672063700028.png",
        "pin":"1111",
        "role":"Manager"
     },
     {
        "_id":"5d1cd6e3ebfdb009a9fd3732",
        "fname":"Steve",
        "lname":"Mandanda",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1674425179648.png",
        "pin":"9856",
        "role":"Employee"
     },
     {
        "_id":"5d1cd7c4ebfdb009a9fd3734",
        "fname":"Benjamin",
        "lname":"Pavard",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1562171950131.png",
        "pin":"3333",
        "role":"Employee"
     },
     {
        "_id":"5d1cd7daebfdb009a9fd3736",
        "fname":"Samuel",
        "lname":"Umtiti",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1562171971380.png",
        "pin":"7894",
        "role":"Employee"
     },
     {
        "_id":"5d1cd95cebfdb009a9fd3740",
        "fname":"Adil",
        "lname":"Rami",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1562172015473.png",
        "pin":"6666",
        "role":"Employee"
     },
     {
        "_id":"5d1cd975ebfdb009a9fd3742",
        "fname":"Paul",
        "lname":"Pogba ",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1562172005647.png",
        "pin":"7777",
        "role":"Manager"
     },
     {
        "_id":"5d1cdabbebfdb009a9fd3744",
        "fname":"Antoine",
        "lname":"Griezmann",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1562172115854.png",
        "pin":"8888",
        "role":"Employee"
     },
     {
        "_id":"5d1cdaecebfdb009a9fd3746",
        "fname":"Kylian",
        "lname":"Mbappe",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1562172178063.png",
        "pin":"9999",
        "role":"Employee"
     },
     {
        "_id":"5e639dba24be441e5773401c",
        "fname":"Jamel",
        "lname":"Thamri",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1642753982493.png",
        "pin":"9863",
        "role":"Administrator"
     },
     {
        "_id":"5fe1de2c540f0a1ece5ce35b",
        "fname":"Ali",
        "lname":"Mohamed ",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1613153570801.png",
        "pin":"1234",
        "role":"Employee"
     },
     {
        "_id":"619d145d1a16075c79d2df56",
        "fname":"Ben khlifa",
        "lname":"Fahmi",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1670708699820.png",
        "pin":"1209",
        "role":"Administrator"
     },
     {
        "_id":"61a9061b1a16075c79d2eb57",
        "fname":"sefsdf",
        "lname":"sdf",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"sdff",
        "role":"Employee"
     },
     {
        "_id":"61a9e5be0ab1f555057b45cd",
        "fname":"Mohsen",
        "lname":"Abid",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1659876272010.png",
        "pin":"2334",
        "role":"Administrator"
     },
     {
        "_id":"627a456e84221d7211cd1920",
        "fname":"Employé",
        "lname":"Employé",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1652375556146.jpeg",
        "pin":"1245",
        "role":"Employee"
     },
     {
        "_id":"635e628493c4c025810c24ef",
        "fname":"Empl",
        "lname":"911",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"9111",
        "role":"Employee"
     },
     {
        "_id":"635fb22293c4c025810c2a02",
        "fname":"Application",
        "lname":"Houssem",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"1919",
        "role":"Employee"
     },
     {
        "_id":"63627b9893c4c025810c35e1",
        "fname":"Test",
        "lname":"Ajout",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"1212",
        "role":"Employee"
     },
     {
        "_id":"636300db93c4c025810c37fa",
        "fname":"Roo",
        "lname":"Espe",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1673600607972.jpeg",
        "pin":"3234",
        "role":"Employee"
     },
     {
        "_id":"6363022993c4c025810c37fe",
        "fname":"Manager",
        "lname":"Esperoo",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"5809",
        "role":"Manager"
     },
     {
        "_id":"6363032693c4c025810c3802",
        "fname":"Esperoo",
        "lname":"Manager",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"4712",
        "role":"Manager"
     },
     {
        "_id":"6396ef66023aa64c675fa0e8",
        "fname":"Mohamed",
        "lname":"Zemzemi",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"2244",
        "role":"Administrator"
     },
     {
        "_id":"63c8228f39785e162c177c4c",
        "fname":"Mohamed",
        "lname":"Souibgui",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"2234",
        "role":"Administrator"
     },
     {
        "_id":"63f36570161eae3be8b32a49",
        "fname":"Ggg",
        "lname":"Gh",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"4415",
        "role":"Manager"
     },
     {
        "_id":"63f4b1b5161eae3be8b32d79",
        "fname":"Zinedine",
        "lname":"Zidane",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"2000",
        "role":"Employee"
     },
     {
        "_id":"63f903c194daa66571f0762c",
        "fname":"Udud",
        "lname":"Jdjdkd",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"3245",
        "role":"Employee"
     },
     {
        "_id":"63fdf0f5f68b023362566247",
        "fname":"A",
        "lname":"E",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1677586677531.png",
        "pin":"6482",
        "role":"Employee"
     },
     {
        "_id":"63ff2410f2c3724f8e1e6512",
        "fname":"Elhouni ",
        "lname":"Hamdou ",
        "manage":[
           "Array"
        ],
        "picture":"",
        "pin":"1912",
        "role":"Employee"
     },
     {
        "_id":"6400cf3d078c70035c5fefe4",
        "fname":"Badri",
        "lname":"Anis",
        "manage":[
           "Array"
        ],
        "picture":"/profile/1677774653126.jpeg",
        "pin":"1913",
        "role":"Employee"
     }];
      const t4= codeLicense;
      

      return {
        key:t,
        settingsPause:t2,
        License:t4,
        employees:t3,
        settings:t1,
      }
      


    }

      //const responseData = response.data;
      
     
      
     
    } catch (error) {
      if (error?.response) {
        return rejectWithValue({
          error: error.response.data.error,
          message: error.response.data.messages,
        });
      } else if (error?.request) {
        return rejectWithValue({
          error: true,
          message: "Request Error",
        });
      } else {
        return rejectWithValue({
          error: true,
          message: "Something went wrong",
        });
      }
    }
  }
);

