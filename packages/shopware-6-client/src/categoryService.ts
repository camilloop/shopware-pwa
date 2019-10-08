import axios from "axios";
import { config } from "./settings";
import { CATEGORY_ENDPOINT } from "./endpoints";

export interface Category {
  name: String;
}

export interface CategoryService {
  getCategories: () => Promise<Category[]>;
}

const getCategories = async function(): Promise<Category[]> {
  const resp = await axios.get(config.endpoint + CATEGORY_ENDPOINT);
  return resp.data;
};

export const CategoryService: CategoryService = {
  getCategories
};