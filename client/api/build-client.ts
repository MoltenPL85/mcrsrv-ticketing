import axios from 'axios';
import { NextPageContext } from 'next';

export default ({ req }: NextPageContext) => {
  if (typeof window === 'undefined') {
    // SERVICENAME.NAMESPACE
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};
