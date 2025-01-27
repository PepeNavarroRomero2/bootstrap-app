"use client"
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from "./Grid";
import Navbar from "./Navbar";
import Card from "./Card";
import ModalExample from "./ModalExample";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Grid/>
      <ModalExample/>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Prueba Modal
      </button>
    </div>
  );
}
