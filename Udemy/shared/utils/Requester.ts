export abstract class Requester<T> {
  public static Get<T>(url: string): Promise<T> {
    
    return fetch(url, { 
      headers: { 
        'Accept': 'application/json',        
      },
      method: 'GET'
    })
    .then((value) => {
      
      return value.json();
    })
    .catch((error) => {
      return error;
    });
  }

  public static Post<T>(url: string, data: T) {
    return fetch(url, {      
      headers: { 'Accept': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then((value) => {
      return value.json();
    })
    .catch((error) => {
      return error;
    })
  }

  public static Put<T>(url: string, data: T) {
    return fetch(url, {      
      headers: { 'Accept': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(data)
    })
    .then((value) => {
      return value.json();
    })
    .catch((error) => {
      return error;
    })
  }

  public static Delete(url: string) {
    return fetch(url, {      
      headers: { 'Accept': 'application/json' },
      method: 'DELETE',      
    })
    .then((value) => {
      return value.json();
    })
    .catch((error) => {
      return error;
    })
  }
}