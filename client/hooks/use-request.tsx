import axios, { AxiosResponse, Method } from 'axios';
import { useState } from 'react';

interface ErrorResponse {
  message: string;
  field: 'email' | 'password';
}

interface RequestBodyCredentials {
  email: string;
  password: string;
}

interface RequestBodyNewTicket {
  title: string;
  price: string;
}

interface RequestBodyPurchaseTicket {
  ticketId: string;
}

interface RequestBodyOrder {
  orderId: string;
}

type requestBody =
  | RequestBodyCredentials
  | RequestBodyNewTicket
  | RequestBodyPurchaseTicket
  | RequestBodyOrder;

interface useRequestProps {
  url: string;
  method: Method;
  body: requestBody;
  onSuccess?: (data: any) => void;
}

const useRequest = ({ url, method, body, onSuccess }: useRequestProps) => {
  const [errors, setErrors] = useState<JSX.Element>(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);

      const response: AxiosResponse<any> = await axios[method](url, {
        ...body,
        ...props,
      });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops...</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err: ErrorResponse) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;
