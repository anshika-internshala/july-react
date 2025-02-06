import {
  createRestaurant,
  deleteOneRestaurant,
  fetchRestaurants,
  updateOneRestaurant,
} from "../controllers/restaurants.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export function routes(app) {
  app.post("/api/restaurant", createRestaurant);
  app.get("/api/restaurants", verifyToken, fetchRestaurants);
  app.put("/api/restaurant/:id", updateOneRestaurant);
  app.delete("/api/restaurant/:id", deleteOneRestaurant);
}

export default routes;
