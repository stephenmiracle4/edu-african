import React from 'react';
import "./Teachers.css";
import T1 from "../../assets/EduBin Images/Edu T12.jpg"
import T2 from "../../assets/EduBin Images/Edu T1.jpg"
import T3 from "../../assets/EduBin Images/Edu T2.jpg"
import T4 from "../../assets/EduBin Images/Edu T5.jpg"
import T5 from "../../assets/EduBin Images/Edu T11.jpg"
import T6 from "../../assets/EduBin Images/Edu T10.jpg"
import T7 from "../../assets/EduBin Images/Edu T3.jpg"
import T8 from "../../assets/EduBin Images/Edu T13.jpg"

const products = [
  {
    id: 1,
    name: 'Mark Egbuson',
    title: 'Vice Chancellor',
    href: '#',
    imageSrc: T1,
    imageAlt: 'Vice Chancellor Mark Alen',
  },
  {
    id: 2,
    name: 'Elizabeth Lawson',
    title: 'Dean of Studies',
    href: '#',
    imageSrc: T2,
    imageAlt: 'Professor Elizabeth Lawson',
  },
  {
    id: 3,
    name: 'Dr.Mary Ajayi',
    title: 'Dean of Student Affairs',
    href: '#',
    imageSrc: T3,
    imageAlt: 'Dr. Mary Ajayi',
  },
  {
    id: 4,
    name: 'Dr. Frances Ben',
    title: 'Head Of Department (Accounting)',
    href: '#',
    imageSrc: T4,
    imageAlt: 'Dr. Frances Ben',
  },
  {
    id: 5,
    name: 'Henry Benjamin',
    title: 'Professor',
    href: '#',
    imageSrc: T5,
    imageAlt: 'Professor Henry Benjamin',
  },
  {
    id: 6,
    name: 'Michael Edoho',
    title: 'Professor',
    href: '#',
    imageSrc: T6,
    imageAlt: 'Professor Michael Edoho',
  },
  {
    id: 7,
    name: 'Josephine Ibe',
    title: 'Professor',
    href: '#',
    imageSrc: T7,
    imageAlt: 'Professor Josephine Ibe',
  },
  {
    id: 8,
    name: 'Stephen Abdul',
    title: 'Professor',
    href: '#',
    imageSrc: T8,
    imageAlt: 'Professor Stephen Abdul',
  },
];

const Teachers = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Teachers!
          </h2>
          <p className="mt-6 text-lg text-gray-600">
          'We are a passionate and dynamic team, dedicated to inspiring and empowering our students. With a shared commitment to excellence, we strive to deliver exceptional results and foster a supportive learning environment.''
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              {product.title && <p className="text-sm text-gray-500">{product.title}</p>}
              {product.price && <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
