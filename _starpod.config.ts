import { defineStarpodConfig } from 'src/utils/config';

export default defineStarpodConfig({
  blurb: ' Storie di Draghi e Cavalieri ma anche storie di piccoli Goblin irritanti e maghi incapaci…',
  description:
    'Benvenuti a Sotterranei e Dragoni! Un podcast su Dungeons & Dragons o DnD per gli Amici! Un podcast veloce, immediato con pillole sul gioco di ruolo, sui racconti e sulla magia di riunirsi attorno ad un tavolo! In ogni stagione troverete un grande racconto, diviso per episodi, a cui non mancheranno chicche descrittive per aiutare a comprendere al meglio le dinamiche di interpretazione, avere spunti per vivere e creare al meglio le proprie avventure, da condividere assieme agli amici!',
  hosts: [
    {
      name: 'Alessandro Renzi',
      bio: 'Bio di Alessandro Renzi, il conduttore del podcast.',
      img: 'alessandrorenzi.jpg'
    },
    {
      name: 'Matteo Manoni',
      bio: 'Bio di Matteo Manoni, il co-conduttore del podcast.',
      img: 'matteomanoni.jpg'
    }
  ],
  platforms: {
    apple:
      'https://podcasts.apple.com/us/podcast/whiskey-web-and-whatnot/id1552776603?uo=4?mt=2&ls=1',
    appleIdNumber: '1552776603',
    overcast: 'https://overcast.fm/itunes1552776603',
    pocketCasts: 'https://pca.st/bezzctzj',
    spotify: 'https://open.spotify.com/show/19jiuHAqzeKnkleQUpZxDf',
    youtube: 'https://www.youtube.com/@WhiskeyWebAndWhatnot/'
  },
  rssFeed: ''
});