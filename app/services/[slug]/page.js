import servicesData from "../../data/servicesData";

export default async function Page({ params }) {
  // Get the dynamic slug from params
  const { slug } = params;

  // Find the service data that matches the slug
  const serviceData = servicesData.find((service) => service.slug === slug);

  if (!serviceData) {
    return <div>Service not found</div>; // Handle if service not found
  }

  const { icon, title, details } = serviceData;

  return (
    <section className="min-h-screen dark:bg-dark">
      <div className="container mx-auto p-5">
        <div className="flex flex-col items-center text-center">
          <img
            src={icon}
            alt={title}
            className="h-64 w-64 object-cover rounded-full shadow-md"
          />
          <h1 className="mt-4 text-4xl font-bold text-primary">{title}</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-white">
            {details}
          </p>
        </div>
      </div>
    </section>
  );
}
