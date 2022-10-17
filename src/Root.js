import AppContainer from "./AppContainer";
import { Header } from './Header';
import Images from './Images';
import { useState } from 'react';

export default function Root () {
    const [date, setDate] = useState("");
  return (
    <AppContainer
      header={<Header date={date} setDate={setDate} />}
      images={<Images date={date} />}
    />
  );
}