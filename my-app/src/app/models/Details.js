import { Schema, model, models } from "mongoose";

const detailSchema = new Schema({
  username: String,
  email: String,
});

const Details = models.Details || model("Details", detailSchema);

export default Details;
