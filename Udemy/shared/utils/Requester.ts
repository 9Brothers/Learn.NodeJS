export abstract class Requester<T> {
  public static GetJSON<T>(url: string): Promise<T> {
    
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

  public static PostJSON<T>(url: string, data: T) {
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

  public static PutJSON<T>(url: string, data: T) {
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

  public static DeleteJSON(url: string) {
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

  public static GetHTML<T>(url: string): Promise<T> {
    return fetch(url, { 
      headers: { 
        'Accept': 'text/html',        
      },
      method: 'GET',
      
    })
    .then((value) => {
      
      return value.text();
    })
    .catch((error) => {
      return error;
    });
  }
}


