const attractions = [
  {
    id: 'asia-1',
    name: 'โตเกียว ทาวเวอร์ (Tokyo Tower)',
    country: 'Japan',
    location: 'Tokyo, Japan',
    short: 'แลนด์มาร์กยอดนิยมของโตเกียว มุมมองเมืองกว้าง',
    description:
      'Tokyo Tower เป็นสัญลักษณ์ของเมืองโตเกียว ให้มุมมองพาโนรามาของเมืองทั้งกลางวันและกลางคืน ใกล้ย่านช็อปปิ้งและกินอาหารยอดนิยม',
    image:
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=836',
    tags: ['Asia', 'City', 'Landmark']
  },
  {
    id: 'asia-2',
    name: 'พระราชวังต้องห้าม (Forbidden City)',
    country: 'China',
    location: 'Beijing, China',
    short: 'พระราชวังโบราณศูนย์กลางประวัติศาสตร์จีน',
    description:
      'The Forbidden City is a vast imperial palace complex in Beijing, showcasing ancient Chinese architecture and history.',
    image:
      'https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
    tags: ['Asia', 'History', 'Architecture']
  },
  {
    id: 'asia-3',
    name: 'เกาะภูเก็ต (Phuket Beaches)',
    country: 'Thailand',
    location: 'Phuket, Thailand',
    short: 'ชายหาดยอดนิยม ทรายขาว น้ำใส',
    description: 'Beaches in Phuket are famous for white sand, clear waters, and lively beach towns.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3',
    tags: ['Asia', 'Beach', 'Relax']
  },
  {
    id: 'asia-4',
    name: 'วัดพระแก้ว (Wat Phra Kaew)',
    country: 'Thailand',
    location: 'Bangkok, Thailand',
    short: 'วัดสำคัญใจกลางกรุงเทพฯ สถาปัตยกรรมไทยประณีต',
    description:
      'Wat Phra Kaew (Temple of the Emerald Buddha) is one of Thailand\'s most sacred Buddhist temples, located within the Grand Palace in Bangkok.',
    image:
      'https://images.unsplash.com/photo-1586098311577-520120ba3df3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    tags: ['Asia', 'Culture', 'Temple']
  },
  {
    id: 'europe-1',
    name: 'หอไอเฟล (Eiffel Tower)',
    country: 'France',
    location: 'Paris, France',
    short: 'สัญลักษณ์ของปารีส วิวแม่น้ำแซน',
    description:
      'The Eiffel Tower is an iconic iron lattice tower in Paris, offering panoramic views of the city and the Seine River.',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5',
    tags: ['Europe', 'Landmark', 'City']
  },
  {
    id: 'europe-2',
    name: 'วิหารเซนต์บาซิล (St. Basil\'s Cathedral)',
    country: 'Russia',
    location: 'Moscow, Russia',
    short: 'วิหารโดมสีสันสดใสบนจัตุรัสเรด',
    description:
      "St. Basil's Cathedral is a colorful and historic church located on Red Square in Moscow, famous for its onion domes.",
    image:
      'https://plus.unsplash.com/premium_photo-1694475513325-b759d0738a80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    tags: ['Europe', 'Architecture', 'History']
  },
  {
    id: 'europe-3',
    name: 'โคลอสเซียม (Colosseum)',
    country: 'Italy',
    location: 'Rome, Italy',
    short: 'สนามกีฬากลางแจ้งยุคโรมัน โบราณสถานสำคัญ',
    description:
      'The Colosseum in Rome is an ancient amphitheater and a symbol of Rome\'s imperial past.',
    image:
      'https://images.unsplash.com/photo-1699012462295-bace478f27bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    tags: ['Europe', 'History', 'Landmark']
  },
  {
    id: 'europe-4',
    name: 'ซากราดา ฟามีเลีย (Sagrada Família)',
    country: 'Spain',
    location: 'Barcelona, Spain',
    short: 'ผลงานสถาปัตยกรรมของ Gaudí ที่ยังคงสร้าง',
    description:
      "Sagrada Família is Antoni Gaudí's unfinished masterpiece in Barcelona, famous for its unique organic architecture.",
    image:
      'https://plus.unsplash.com/premium_photo-1702598969295-71b202296f7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169',
    tags: ['Europe', 'Architecture', 'Art']
  }
];

export default attractions;
