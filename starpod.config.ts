import { defineStarpodConfig } from 'src/utils/config';

export default defineStarpodConfig({
  blurb: 'Un podcast su Dungeons & Dragons o Dnd per gli amici, e sui giochi di ruolo in generale, diciamocelo!',
  description:
    `Storie di Draghi e Cavalieri ma anche storie di piccoli Goblin irritanti e maghi incapaci… Storie di Fantasia e Sogni. Spunti di interpretazione, mostri e vite di personaggi Unici.
    Benvenuti a Sotterranei e Dragoni! Un podcast su Dungeons & Dragons o DnD per gli Amici!
    Un podcast veloce, immediato con pillole sul gioco di ruolo, sui racconti e sulla magia di riunirsi attorno ad un tavolo!
    In ogni stagione troverete un grande racconto, diviso per episodi, a cui non mancheranno chicche descrittive per aiutare a comprendere al meglio le dinamiche di interpretazione, avere spunti per vivere e creare al meglio le proprie avventure, da condividere assieme agli amici!
    
    Questo podcast fa parte dell'universo di VOIS. Per scoprire di più, segui 
    su Instagram o visita il sito https://vois.fm.`,
    hosts: [
    {
      name: 'Alessandro Renzi',
      bio: 'Il bardo',
      img: 'alessandrorenzi.jpg',
    },
    {
      name: 'Matteo Manoni',
      bio: "L'artefice",
      img: 'matteomanoni.jpg'
    }
  ],
  supportPlatforms: {
    koFi: 'https://ko-fi.com/sotterraneiedragoni',
    patreon: 'https://www.patreon.com/SotterraneieDragoni/posts',
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/sotterraneiedragoni/',
    discord: 'https://discord.gg/yN4gGGqP27',
  },
  platforms: {
    apple:
      'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://podcasts.apple.com/it/podcast/sotterranei-e-dragoni/id1674752326&ved=2ahUKEwjT3fy9sdiOAxWt8rsIHdP4EZIQFnoECA4QAQ&usg=AOvVaw3rbV2yQR90hf_bW7WVTHrJ',
    spotify: 'https://open.spotify.com/show/19jiuHAqzeKnkleQUpZxDf',
    amazonMusic: 'https://music.amazon.it/podcasts/89db599f-03f4-4c05-aa9d-692b86c9bee8/sotterranei-e-dragoni',
    deezer: 'https://deezer.page.link/m1RyfU6Tjy4G1XwX6',
    vois: 'https://vois.fm/podcast/sotterranei-e-dragoni/'  
  },
  rssFeed: 'https://feeds.megaphone.fm/sotterranei'
});
