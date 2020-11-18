import { Connection } from "typeorm";
import db from "./db";

interface BaseRepository{
    connection: db;
}

export default BaseRepository;