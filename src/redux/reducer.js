import React, { createContext } from "react";
import itemFields from "./json/itemFields.json";

const postsInitialState = [
  {
    id: 0,
    title: "CREATE_USER",
    method: "post",
    description: "Add a new product to Store",
    url: "/users",
    fields: itemFields,
    data: null,
    axios: null,
    lastUpdate: null,
    requestTime: null
  },
  {
    id: 1,
    title: "CREATE_CATEGORIE",
    method: "post",
    description: "Add a new product to Store",
    url: "/categories",
    fields: itemFields,
    data: null,
    axios: null,
    lastUpdate: null,
    requestTime: null
  },
  {
    id: 2,
    title: "CREATE_ITEM",
    method: "post",
    description: "Add a new product to Store",
    url: "/items",
    fields: itemFields,
    data: null,
    axios: null,
    lastUpdate: null,
    requestTime: null
  },
  {
    id: 3,
    title: "CREATE_CORREIO",
    method: "post",
    description: "Add a new product to Store",
    url: "/correios",
    fields: itemFields,
    data: null,
    axios: null,
    lastUpdate: null,
    requestTime: null
  }
];

var postReducer = (draft, action) => {
  switch (action.type) {
    case "CREATE_USER":
      draft[0] = action.data;
      return [...draft];
    case "CREATE_CATEGORIE":
      draft[1] = action.data;
      return [...draft];
    case "CREATE_ITEM":
      draft[2] = action.data;
      return [...draft];
    case "CREATE_CORREIO":
      draft[3] = action.data;
      return [...draft];
    case "LOADING":
      return { ...draft, loading: false };
    default:
      return [...postsInitialState];
  }
};

const PostContext = createContext(postsInitialState);

export { postReducer, postsInitialState, PostContext };


let item = {
  title: "",
  imgs: "",
  price: "",
  currency: "",
  quantity: "",
  description: "",
  ml: "",
  condition: "",
  warranty: "",
  correio_id: "",
  categorie_id: ""
};

let resquest = {
  buffer: [],
  title: "",
  price: "",
  quantity: "",
  description: "",
  categorie: "",
  subCategorie: "",
  condition: "",
  warranty: "",
  show: false,
  correios: false,
  lenght: 0,
  height: 0,
  width: 0,
  weight: 0
};