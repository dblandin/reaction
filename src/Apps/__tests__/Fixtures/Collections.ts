export const CollectionsFixture = [
  {
    title: "KAWS: Companions",
    slug: "kaws-companions",
    headerImage:
      "https://artsy-vanity-files-production.s3.amazonaws.com/images/kaws2.png",
  },
  {
    title: "Big Artists, Small Sculptures",
    slug: "collectible-sculptures",
    headerImage:
      "http://files.artsy.net/images/pumpkinsbigartistsmallsculpture.png",
    price_guidance: 1000,
  },
  {
    title: "Minimalist Prints",
    slug: "minimalist-prints",
    headerImage: "http://files.artsy.net/images/minimalistprints.png",
  },
  {
    title: "Contemporary Limited Editions",
    slug: "contemporary-limited-editions",
    headerImage:
      "http://files.artsy.net/images/contemporarylimitededition2.png",
  },
  {
    title: "Street Art Now",
    slug: "street-art-now",
    headerImage: "http://files.artsy.net/images/streetartnow.png",
    price_guidance: 200,
  },
  {
    title: "Timeless Modern Prints",
    slug: "timeless-modern-prints",
    headerImage: "http://files.artsy.net/images/timelessmodernprints.png",
  },
]

export const CollectionsRailFixture = [
  {
    slug: "jasper-johns-flags",
    headerImage: "http://files.artsy.net/images/jasperjohnsflag.png",
    title: "Jasper Johns: Flags",
    price_guidance: 1000,
    artworks: {
      hits: [
        {
          artist: {
            name: "Jasper Johns",
          },
          title: "Flag",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/4izTOpDv-ew-g1RFXeREcQ/small.jpg",
          },
        },
        {
          artist: {
            name: "Jasper Johns",
          },
          title: "Flag (Moratorium)",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/Jyhryk2bLDdkpNflvWO0Lg/small.jpg",
          },
        },
        {
          artist: {
            name: "Jasper Johns",
          },
          title: "Flag I",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/gM-IwaZ9C24Y_RQTRW6F5A/small.jpg",
          },
        },
      ],
    },
  },
  {
    slug: "street-art-now",
    headerImage: "http://files.artsy.net/images/banksygirlwithballoon.png",
    title: "Street Art Now",
    price_guidance: 200,
    artworks: {
      hits: [
        {
          artist: {
            name: "Alec Monopoly",
          },
          title: "Community Chest: Go To Jail",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/DSa-4s-zRJEwW6mZRgDoxQ/small.jpg",
          },
        },
        {
          artist: {
            name: "Alec Monopoly",
          },
          title: "DJ Monopoly",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/L0wx7i69h96MUFq9EgOpBQ/small.jpg",
          },
        },
        {
          artist: {
            name: "Keith Haring",
          },
          title: "Keith Haring 1982 Dolphin lithograph",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/ZZodXz8Y7v7h0VWlQnZQCw/small.jpg",
          },
        },
      ],
    },
  },
  {
    slug: "contemporary-limited-editions",
    headerImage:
      "http://files.artsy.net/images/contemporarylimitededition2.png",
    title: "Contemporary Limited Editions",
    price_guidance: 1000,
    artworks: {
      hits: [
        {
          artist: {
            name: "Kiki Smith",
          },
          title: "Untitled",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/VzteQ4joB2Iwjek9kPUrGg/small.jpg",
          },
        },
        {
          artist: {
            name: "Gerhard Richter",
          },
          title: "P8",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/ZN_qyzZgvHz-DRMFW-Wrcw/small.jpg",
          },
        },
        {
          artist: {
            name: "Robert Longo",
          },
          title: "Monsters",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/0vJm9FeXzxzZJpBC-A-4ig/small.jpg",
          },
        },
      ],
    },
  },
  {
    slug: "timeless-modern-prints",
    headerImage: "http://files.artsy.net/images/timelessmodernprints.png",
    title: "Timeless Modern Prints",
    price_guidance: 2500,
    artworks: {
      hits: [
        {
          artist: {
            name: "Joan Miró",
          },
          title: "Migratory Bird I",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/_67k2lYpopsd-UK6LOD61g/small.jpg",
          },
        },
        {
          artist: {
            name: "Pablo Picasso",
          },
          title: "Bacchanale",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/mepJj80_m4NiWUJviymyBw/small.jpg",
          },
        },
        {
          artist: {
            name: "Josef Albers",
          },
          title: "Mitered Squares-Apricot ",
          image: {
            url:
              "https://d32dm0rphc51dk.cloudfront.net/CbgUJdNK5lWvhKzziYgx7w/small.jpg",
          },
        },
      ],
    },
  },
]

export const CategoriesFixture = [
  {
    name: "Abstract Art",
    collections: [
      {
        headerImage: "http://files.artsy.net/images/minimalistprints.png",
        slug: "minimalist-prints",
        title: "Minimalist Prints",
      },
    ],
  },
  {
    name: "Contemporary Art",
    collections: [
      {
        headerImage:
          "http://files.artsy.net/images/contemporarylimitededition2.png",
        slug: "contemporary-limited-editions",
        title: "Contemporary Limited Editions",
      },
    ],
  },
  {
    name: "Street Art",
    collections: [
      {
        headerImage: "http://files.artsy.net/images/streetartnow.png",
        slug: "street-art-now",
        title: "Street Art Now",
      },
      {
        headerImage: "http://files.artsy.net/images/streetartnow.png",
        slug: "banksy-girl-with-balloon",
        title: "Banksy: Girl with Balloon",
      },
      {
        headerImage: "http://files.artsy.net/images/shepardfaireyobama.png",
        slug: "shepard-fairey-barack-obama",
        title: "Shepard Fairey: Barack Obama",
      },
      {
        headerImage: "http://files.artsy.net/images/banksyrat.png",
        slug: "banksy-rats",
        title: "Banksy: Rats",
      },
      {
        headerImage: "http://files.artsy.net/images/banksydismaland.png",
        slug: "banksy-dismaland",
        title: "Banksy: Dismaland",
      },
      {
        headerImage:
          "http://files.artsy.net/images/jeanmichelbasquiatcrowns.png",
        slug: "jean-michel-basquiat-crowns",
        title: "Jean-Michel Basquiat: Crowns",
      },
      {
        headerImage: "http://files.artsy.net/images/popshopkeithharing.png",
        slug: "keith-haring-pop-shop",
        title: "Keith Haring: Pop Shop",
      },
      {
        headerImage:
          "http://files.artsy.net/images/shepardfaireywethepeople.png",
        slug: "shepard-fairey-we-the-people",
        title: "Shepard Fairey: We the People",
      },
    ],
  },
]

// Represents one collection hub
export const CollectionHubFixture = {
  title: "KAWS: Companions",
  slug: "kaws-companions",
  headerImage:
    "https://artsy-vanity-files-production.s3.amazonaws.com/images/kaws2.png",
  linkedCollections: [
    {
      groupType: "OtherCollections",
      name: "Other Collections",
      members: [
        {
          slug: "artist-posters",
          thumbnail: "http://files.artsy.net/images/posters_thumbnail.png",
          title: "Artist Posters",
        },
        {
          slug: "artist-skateboard-decks",
          title: "Artist Skateboard Decks",
        },
        {
          slug: "kaws-bearbrick",
          thumbnail:
            "http://files.artsy.net/images/kaws-bearbrick_thumbnail.png",
          title: "KAWS: Bearbricks",
        },
      ],
    },
    {
      groupType: "FeaturedCollections",
      name: "Featured Collections",
      members: [
        {
          description:
            '<p>From SpongeBob SquarePants to Snoopy, many beloved childhood cartoons have made an impact on the history of art. <a href="https://www.artsy.net/artist/roy-lichtenstein">Roy Lichtenstein</a> was the first to transform the aesthetic of comic strips into fine art when he painted fighter jets, <a href="https://www.artsy.net/collection/roy-lichtenstein-crying-girl">crying girls</a>, and kissing couples in brightly-colored dots and stripes. His Pop contemporary <a href="https://www.artsy.net/artist/andy-warhol">Andy Warhol</a> grew up obsessed with comic books and portrayed <a href="https://www.artsy.net/collection/andy-warhol-superman">Superman</a> flying through the air as an homage to his childhood hero. For contemporary artists, Walt Disney’s Mickey Mouse has been especially influential, appearing in prints by <a href="https://www.artsy.net/artist/keith-haring">Keith Haring</a>, <a href="https://www.artsy.net/artist/damien-hirst">Damien Hirst</a>, <a href="https://www.artsy.net/artist/banksy">Banksy</a>, and more. <a href="https://www.artsy.net/artist/kaws">KAWS</a> and <a href="https://www.artsy.net/artist/takashi-murakami">Takashi Murakami</a> have even invented their own versions of the classic cartoon, naming their creations <i><a href="https://www.artsy.net/collection/kaws-companions">Companion</a></i> and <i><a href="https://www.artsy.net/collection/takashi-murakami-mr-dob">Mr. DOB</a></i> respectively. Below, discover a curated selection of works inspired by cartoons, providing a new spin on some of the world’s most recognizable characters.</p>',
          price_guidance: 60,
          slug: "art-inspired-by-cartoons",
          thumbnail: "http://files.artsy.net/images/cartoons_thumbnail.png",
          title: "Art Inspired by Cartoons",
        },
        {
          description:
            '<p>Street artists have long drawn inspiration from popular culture, spray painting and wheatpasting portraits of celebrities in public spaces that encourage passersby to take a closer look at the power of today’s influencers. Below, discover takes on it-girls, A-listers, and world leaders with a street art spin—from <a href="https://www.artsy.net/artist/mr-brainwash">Mr. Brainwash</a>’s depictions of supermodel <a href="https://www.artsy.net/collection/mr-brainwash-kate-moss">Kate Moss</a> to <a href="https://www.artsy.net/artist/shepard-fairey">Shepherd Fairey</a>’s iconic posters of <a href="https://www.artsy.net/collection/shepard-fairey-barack-obama">President Barack Obama</a>.</p>',
          price_guidance: 400,
          slug: "street-art-celebrities",
          thumbnail:
            "http://files.artsy.net/images/street-art-celebrities_thumbnail.png",
          title: "Street Art: Celebrity Portraits",
        },
        {
          description:
            '<p>Whether from Marvel or DC Comics, superheroes—and villains—from all worlds have appeared in street art. With universally understood stories and recognizable faces, superheroes and classic comic book characters can often act as a vehicle for street artists to inspire or provoke the public. For example, <a href="https://www.artsy.net/artist/hebru-brantley">Hebru Brantley</a> invented his own character <a href="https://www.artsy.net/collection/hebru-brantley-fly-boys">FlyBoy</a> to increase representation among superheroes, <a href="https://www.artsy.net/artist/shepard-fairey">Shepard Fairey</a> reimagined Iron Man as an imposing Uncle Sam to critique government propaganda, and <a href="https://www.artsy.net/artist/banksy">Banksy</a> stenciled a young boy costumed as the Flash to remind viewers that not all heroes wear capes. Below, discover a selection of classic superheroes reimagined by today’s street artists.</p>',
          price_guidance: 1200,
          slug: "street-art-superheroes-and-villains",
          thumbnail:
            "http://files.artsy.net/images/street-art-superheroes_thumbnail.png",
          title: "Street Art: Superheroes and Villains",
        },
      ],
    },
  ],
}
