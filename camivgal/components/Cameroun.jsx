'use client';
import DivDesPages from './DivDesPages';
import Image from 'next/image';
import independance from '@/public/img/independance_cmr.webp';
import Panorama from './Panorama';

export default function Cameroun() {
  // const mesImages = [

  //     "/img/img2.webp",
  //     "/img/img3.webp",
  //     "/img/img4.webp",
  //     "/img/img5.webp",
  //     "/img/img6.webp",

  // ];
  return (
    <div>
      {/* Vidéo en arrière-plan */}
      <div className="relative w-full h-[500px] flex items-center justify-center text-white text-3xl font-bold">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/img/VideoKribi.mp4"
        ></video>

        {/* Filtre sombre pour améliorer la lisibilité */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Contenu au premier plan */}
        <h1 className="relative z-10 text-center p-4">
          Découvrez le Cameroun!
        </h1>
      </div>

      {/* Section avec image et texte */}
      <div>
        {/* image à gauche et le texte à droite */}
        <DivDesPages
          img="/img/palais_cmr.webp"
          text="Le palais présidentiel du Cameroun, appelé le palais de l'unité, a été construit en 1980. Il a été édifié sous l'administration du premier président du pays, Son Excellence Ahmadou Ahidjo. Aujourd'hui, il est toujours considéré comme l'un des plus beaux palais africains."
          isImageLeft={true} // Position de l'image à gauche
        />

        {/* image à droite et le texte à gauche */}
        <DivDesPages
          img="/img/independance_cmr.webp"
          text="Il s'agit du monument de l'indépendance du Cameroun, situé en plein centre ville, en face de l'hotel de ville."
          isImageLeft={false} // Position de l'image à droite
        />

        {/* image à gauche et le texte à droite */}
        <DivDesPages
          img="/img/ArtCameroun.webp"
          text="Le Cameroun, un pays riche aussi bien sur le plan culturel que sur le plan artistique. Vous pouvez observer un tableau fait par un peintre en herbe de la place."
          isImageLeft={true} // Position de l'image à gauche
        />

        {/* image à droite et le texte à gauche */}
        <DivDesPages
          img="/img/mer_kribi.webp"
          text="Au Cameroun, il existe une multitude de paysages. En effet, son surnom est l'Afrique en miniature car on y retrouve tous les types de paysages, de végétattion et de reliefs.
                Il s'agit d'une image réalisée par un amateur de photographie."
          isImageLeft={false} // Position de l'image à droite
        />
        {/* image à gauche et le texte à droite */}
        <DivDesPages
          img="/img/pirogue_kribi.webp"
          text="Vous pouvez découvrir des paysages époustouflants, et manger du bon poisson si vous passez par la ville de Kribi, qui est une ville située directement au bord de l'Océan Atlantique"
          isImageLeft={true} // Position de l'image à gauche
        />
        {/* image à droite et le texte à gauche */}
        <DivDesPages
          img="/img/3jeunes.webp"
          text="Comment parler du Cameroun sans évoquer le football? Ce pays ou jouer au footbal est une réligion! Ici 3 jeunes excités a l'idée d'assister a un match de la CAN 2021 "
          isImageLeft={false} // Position de l'image à droite
        />

        {/* Passer un tableau d'images au composant */}
        {/* <Panorama images={mesImages} /> */}
      </div>
    </div>
  );
}
