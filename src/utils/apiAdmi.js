
export class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }




    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        else return res.json();
    }

    // УСЛУГИ
    getServiceMethod() {
        return fetch(`${this._url}/offer/all`, {
            method: "GET",
            headers: this._headers,
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }

    postServiceMethod(offerName, offerDescription, imagesUuid) {
        console.log(offerName, offerDescription, imagesUuid)
        return fetch(`${this._url}/offer/new`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                "offerName": offerName,
                "offerDescription": offerDescription,
                "imagesUuids": [
                    imagesUuid
                ]

            }),
        })
            .then((res) => {
                console.log(res)
                return this._getResponseData(res);
            })
    }

    deleteServiceMethod(id) {
        return fetch(`${this._url}/offer/delete?id=${id}`, {
            method: "DELETE",
            headers: this._headers,
            // body: JSON.stringify({
            //     'id': id
            // })
        })
            .then((res) => {
                return this._getResponseData(res);
            })

    }


    // Портфолио
    getPortfolioMethod() {
        return fetch(`${this._url}/portfolio/all`, {
            method: "GET",
            headers: this._headers,
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }

    postPortfolioMethod(portfolioHeader, imagesUuids) {
        return fetch(`${this._url}/portfolio/new`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                'portfolioHeader': portfolioHeader,
                'imagesUuids': [imagesUuids]
            }),
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }

    deletePortfolioMethod(id) {
        return fetch(`${this._url}/portfolio/delete?id=${id}`, {
            method: "DELETE",
            headers: this._headers,
            // body: JSON.stringify({
            //     'id': id
            // })
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }

    // ОБРАТНАЯ СВЯЗЬ
    postFeedbackMethod(contact, text) {
        return fetch(`${this._url}/request/add`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                contact: contact,
                text: text
            }),
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }


    // ЗАГРУЗКА КАРТИНКИ
    getImgMethod() {
        return fetch(`${this._url}/image/getById`, {
            method: "GET",
            headers: this._headers,
        })
            .then((res) => {
                return this._getResponseData(res);
            })

    }

    postImgMethod(file) {
        return fetch(`${this._url}/image/addImage`, {
            method: "POST",
            headers: this._headers,
            body: file,
        })
            .then((res) => {

                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                else return res.json();
                // //   return this._getResponseData(res); 
            })
    }
}




