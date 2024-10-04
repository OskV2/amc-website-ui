"use client";
import About from "@/components/About";
import Services from "@/components/Services";
import Restoration from "@/components/Restoration";
import Contact from "@/components/Contact";
import SocialMedia from "@/components/SocialMedia";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../utils/http'

/*
* TODO:
* - check if i can do live chat that will write directly to whatsapp of workshop owner
*/

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <About />
      <Services />
      <Restoration />
      <SocialMedia />
      <Contact />
    </QueryClientProvider>
  );
};

export default Home;
