export interface Response {
  links: Array<Link>;
  content: Array<Customer>;
}

export interface Customer {
  firstName: string;
  lastName: string;
  id: string;
  links: Array<Link>;
  customerStatus: CustomerStatus;
  services: Array<Service>;
}

interface Link {
  rel: string;
  href: string;
}
interface CustomerStatus {
  id: string;
  name: string;
}
interface ServiceStatus {
  id: string;
  name: string;
}
interface Service {
  id: string;
  name: string;
  serviceStatus: ServiceStatus;

}
