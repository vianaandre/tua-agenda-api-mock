import { ServiceProps } from 'common/interfaces/ServiceProps';
import { CategoryProps } from 'common/interfaces/CategoryProps';
import { NextApiRequest, NextApiResponse } from 'next';
import services from '../../service/mock/services.json';

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category }: { category?: CategoryProps } = req.body;
  const { city, service } = req.body;

  if (city) {
    const servicesPerCity = [] as ServiceProps[];

    services.forEach((item) => {
      if (item.address.city === city) {
        servicesPerCity.push(item);
      }
    });

    return res.status(200).json(servicesPerCity);
  }

  if (service) {
    const servicesPerServiceAndCity = [] as ServiceProps[];

    services.forEach((item) => {
      if (item.service.toLocaleLowerCase().includes(service.toLocaleLowerCase())) {
        if (city) {
          if (item.address.city === city) {
            servicesPerServiceAndCity.push(item);
          }
        } else {
          servicesPerServiceAndCity.push(item);
        }
      }
    });

    return res.status(200).json(servicesPerServiceAndCity);
  }

  if (category) {
    const servicesPerCategory = [] as ServiceProps[];

    services.forEach((item) => {
      item.categories.forEach((i) => {
        if (category === i) {
          servicesPerCategory.push(item);
        }
      });
    });

    return res.status(200).json(servicesPerCategory);
  }

  return res.status(200).json(services);
}

export default handler;
