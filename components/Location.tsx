// import { APIProvider, Map } from "@vis.gl/react-google-maps";

const Location = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // if (!apiKey) {
  //   console.error('API key is missing');
  //   return <div>Error: Google Maps API key is missing.</div>;
  // }

  return (
    <section className="container h-96" id="location">
      {/* <APIProvider apiKey={apiKey}>
        <Map
          defaultZoom={14}
          defaultCenter={{ lat: 51.96371395904903, lng: 15.529629703810357 }}
        />
      </APIProvider> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9586.661096370737!2d15.524713710663777!3d51.9654928169755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470613a52b25bd5b%3A0x6847a5a2e07c7340!2sAuto-Moto!5e0!3m2!1spl!2spl!4v1718874737222!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
};

export default Location;