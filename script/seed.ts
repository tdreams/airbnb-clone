const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.listing.createMany({
      data: [
        {
          title: "Rustic Barn Retreat",
          description:
            "Escape to the countryside in this charming barn conversion. Exposed beams, rolling hills, and a peaceful ambiance.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-648067135343912813/original/9e34a82c-89f8-4ef1-a7ab-30648e3ed626.jpeg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497Z"),
          category: "Barns",
          roomCount: 3,
          bathroomCount: 2,
          guestCount: 6,
          locationValue: "AR",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 750,
        },
        {
          title: "Luxury Riverfront Villa",
          description:
            "Indulge in luxury in this stunning riverfront villa. Private pool, river views, and lavish amenities.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/monet/Luxury-20471459/original/3691cafa-c329-46f3-8816-d2c62b4882f8?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Lux",
          roomCount: 6,
          bathroomCount: 5,
          guestCount: 12,
          locationValue: "AU",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 3500,
        },
        {
          title: "Modern Beach House",
          description:
            "Stunning beachfront property with panoramic ocean views. Spacious living areas, private pool, and direct access to the beach. Perfect for a relaxing vacation.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-559300795536382220/original/bcf9680c-1812-4f29-83ee-0ba8e22afb2c.jpeg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Beach",
          roomCount: 4,
          bathroomCount: 3,
          guestCount: 8,
          locationValue: "CA",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 1200,
        },
        {
          title: "Charming Windmill Retreat",
          description:
            "Experience the unique charm of a traditional windmill transformed into a cozy vacation home. Enjoy breathtaking views and serene surroundings.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/1dcf30ee-1137-40b6-a6a8-e94de9294d19.jpg?im_w=1920",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Windmills",
          roomCount: 1,
          bathroomCount: 1,
          guestCount: 2,
          locationValue: "NL",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 350,
        },
        {
          title: "Cozy Island Getaway",
          description:
            "Escape to your own private island paradise. Crystal-clear waters, white sandy beaches, and luxurious accommodations.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52704177/original/14696ed2-a1ac-47e6-9d06-00642b83f582.jpeg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Islands",
          roomCount: 2,
          bathroomCount: 1,
          guestCount: 4,
          locationValue: "BS",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 1500,
        },
        {
          title: "Lakefront Retreat",
          description:
            "Relax and unwind by the serene lake. Enjoy fishing, kayaking, and evenings by the campfire.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53641213/original/7f192893-1a26-4d5e-9202-cc7782ee42fb.jpeg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Lake",
          roomCount: 3,
          bathroomCount: 2,
          guestCount: 6,
          locationValue: "BR",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 800,
        },
        {
          title: "Skiing Chalet",
          description:
            "Hit the slopes in style with this cozy chalet. Ski-in/ski-out access, hot tub, and stunning mountain views.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/b22ad33b-906b-42fc-aee3-25e4e981b462.jpg",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Skiing",
          roomCount: 2,
          bathroomCount: 2,
          guestCount: 4,
          locationValue: "CO",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 900,
        },
        {
          title: "Historic Castle Stay",
          description:
            "Step back in time with a stay in this medieval castle. Grand interiors, lush gardens, and a sense of royal luxury.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/060d44a4-4ea7-4fd3-83e6-081e701c806a.jpg?im_w=1920",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Castles",
          roomCount: 5,
          bathroomCount: 4,
          guestCount: 10,
          locationValue: "FR",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 2000,
        },
        {
          title: "Cave Retreat",
          description:
            "Experience the beauty of nature with a stay in this cave retreat. Natural formations, cozy interiors, and a peaceful ambiance.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-5048416/original/cf508a84-8d49-452e-bf0b-4ec25c09fd36.jpeg",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Caves",
          roomCount: 1,
          bathroomCount: 1,
          guestCount: 2,
          locationValue: "ES",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 300,
        },
        {
          title: "Scenic Camping Site",
          description:
            "Pitch your tent in the heart of nature. Campfires, stargazing, and the tranquility of the great outdoors.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/9c57d6e8-64e9-46ab-a48d-05a55c50baee.jpg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Camping",
          roomCount: 0,
          bathroomCount: 0,
          guestCount: 4,
          locationValue: "CA",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 100,
        },
        {
          title: "Arctic Retreat",
          description:
            "Experience the magic of the Arctic in this cozy cabin. Northern lights, icy landscapes, and the thrill of a winter adventure.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/b68e0409-a513-413d-9991-cee194510d41.jpg?im_w=1920",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Arctic",
          roomCount: 2,
          bathroomCount: 1,
          guestCount: 3,
          locationValue: "NO",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 700,
        },
        {
          title: "Desert Oasis",
          description:
            "Experience the magic of the desert in this luxurious oasis. Private pool, stunning sunsets, and starry nights.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-48014396/original/af4145d3-c77c-421f-b951-4733c841d96b.jpeg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Desert",
          roomCount: 4,
          bathroomCount: 3,
          guestCount: 8,
          locationValue: "AZ",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 1100,
        },
        {
          title: "Modern City Loft",
          description:
            "Experience urban living in this sleek and stylish city loft. High ceilings, contemporary design, and vibrant city views.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/5e67688b-757d-44d6-8b4b-1e91dc6fe49f.jpg?im_w=1920",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Modern",
          roomCount: 1,
          bathroomCount: 1,
          guestCount: 2,
          locationValue: "DE",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 1200,
        },
        {
          title: "Mountain View Cabin",
          description:
            "Relax and unwind in this charming mountain view cabin. Sweeping vistas, hiking trails, and a cozy fireplace.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-53687101/original/70785584-6b5c-4403-9c4f-7870bec4306d.jpeg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Countryside",
          roomCount: 2,
          bathroomCount: 1,
          guestCount: 4,
          locationValue: "CA",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 950,
        },
        {
          title: "Arctic Igloo Experience",
          description:
            "Immerse yourself in the Arctic with this igloo experience. Northern lights, ice sculptures, and an unforgettable adventure.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/6721fc25-afe0-4f35-b181-212ec8ddc186.jpg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Arctic",
          roomCount: 1,
          bathroomCount: 1,
          guestCount: 2,
          locationValue: "NO",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 1300,
        },
        {
          title: "Luxury Castle Escape",
          description:
            "Live like royalty in this luxury castle escape. Grand ballrooms, lavish suites, and a taste of regal elegance.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/ba085fa3-1a44-4f15-8a0e-c39ea9cc0997.jpg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Castles",
          roomCount: 10,
          bathroomCount: 8,
          guestCount: 20,
          locationValue: "IE",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 5000,
        },
        {
          title: "Beachfront Paradise Villa",
          description:
            "Experience paradise in this luxurious beachfront villa. White sandy beaches, infinity pool, and tropical elegance.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/00b3af48-a3ac-413a-a6bb-a2c058cf04c7.jpg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Beach",
          roomCount: 4,
          bathroomCount: 3,
          guestCount: 8,
          locationValue: "TH",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 3800,
        },
        {
          title: "Elegant Oasis by the Lake",
          description:
            "Discover elegance in this luxurious oasis by the lake. Private dock, infinity pool, and breathtaking water views.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/miso/Hosting-51635129/original/5ebee2d7-beef-4977-8f25-f66327282436.jpeg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Lake",
          roomCount: 3,
          bathroomCount: 2,
          guestCount: 6,
          locationValue: "CA",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 3500,
        },
        {
          title: "Opulent Skyline Penthouse",
          description:
            "Experience opulence in this stunning skyline penthouse. Floor-to-ceiling windows, rooftop terrace, and panoramic city views.",
          imageSrc:
            "https://a0.muscache.com/im/pictures/0e15b730-ad1e-47a8-bdc4-acbf4a7c7fab.jpg?im_w=720",
          createdAt: new Date("2023-08-17T05:55:31.497+00:00"),
          category: "Modern",
          roomCount: 3,
          bathroomCount: 2,
          guestCount: 6,
          locationValue: "CO",
          userId: "64dc14c0ca433c6ab7c31f2f",
          price: 5000,
        },
      ],
    });
    console.log("Default listings added successfully");
  } catch (e) {
    console.error("Error sending default listings", e);
  } finally {
    await db.$disconnect();
  }
}

main();
