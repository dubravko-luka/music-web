import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';

interface ApiResponseSuccess<T> {
  data: T;
  status: number;
  statusText: string;
}

interface ApiResponseError {
  error: string;
  data?: any;
  status: number;
  statusText: string;
}

type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;

class ApiClient {
  private client: AxiosInstance;

  // Create an Axios instance with base URL and default headers
  constructor() {
    this.client = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Handles the successful response from the API
  private handleResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  // Handles the error response from the API
  private handleError<T>(error: any): ApiResponse<T> {
    return {
      error: error.response?.data?.message || 'Internal Server Error',
      status: error.response?.status || 500,
      statusText: error.response?.statusText || 'Internal Server Error',
    };
  }

  // Makes a request to the API
  public async request<T>(method: Method, url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.request<T>({
        method,
        url,
        data,
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      return this.handleError<T>(error);
    }
  }
}

export default new ApiClient();
