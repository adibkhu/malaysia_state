# Malaysia 🇲🇾

A website about states in Malaysia.

All information are obtained from Wikipedia.

Im learning about API, and i love programming

Please let me know on what can i improve

# Introduction

11 states and 2 federal territories are located on the Malay Peninsula, collectively called Peninsular Malaysia (Semenanjung Malaysia) or West Malaysia. 2 states are on the island of Borneo, and the remaining federal territory consists of islands offshore of Borneo; they are collectively referred to as East Malaysia or Malaysian Borneo. Out of the 13 states in Malaysia, 9 are monarchies.

Thank you Jianliew for API

https://github.com/JianLoong/malaysia-api

### Built With

* [React.js](https://reactjs.org/)
* [axios](https://axios-http.com/)


# List of End Points

The current base url is [https://jianliew.me/malaysia-api](https://jianliew.me/malaysia-api)

| State / Federal Territories | End Point                      | Status |                                                                        |
| --------------------------- | ------------------------------ | ------ | ---------------------------------------------------------------------- |
| All                         | /state/v1/all.json             | x      | [Test](https://jianliew.me/malaysia-api/state/v1/all.json)             |
| Johor                       | /state/v1/johor.json           | x      | [Test](https://jianliew.me/malaysia-api/state/v1/johor.json)           |
| Kedah                       | /state/v1/kedah.json           | x      | [Test](https://jianliew.me/malaysia-api/state/v1/kedah.json)           |
| Kelantan                    | /state/v1/kelantan.json        | x      | [Test](https://jianliew.me/malaysia-api/state/v1/kelantan.json)        |
| Malacca                     | /state/v1/malacca.json         | x      | [Test](https://jianliew.me/malaysia-api/state/v1/malacca.json)         |
| Negeri Sembilan             | /state/v1/negeri_sembilan.json | x      | [Test](https://jianliew.me/malaysia-api/state/v1/negeri_sembilan.json) |
| Pahang                      | /state/v1/pahang.json          | x      | [Test](https://jianliew.me/malaysia-api/state/v1/pahang.json)          |
| Penang                      | /state/v1/penang.json          | x      | [Test](https://jianliew.me/malaysia-api/state/v1/penang.json)          |
| Perak                       | /state/v1/perak.json           | x      | [Test](https://jianliew.me/malaysia-api/state/v1/perak.json)           |
| Perlis                      | /state/v1/perlis.json          | x      | [Test](https://jianliew.me/malaysia-api/state/v1/perlis.json)          |
| Sabah                       | /state/v1/sabah.json           | x      | [Test](https://jianliew.me/malaysia-api/state/v1/sabah.json)           |
| Sarawak                     | /state/v1/sarawak.json         | x      | [Test](https://jianliew.me/malaysia-api/state/v1/sarawak.json)         |
| Selangor                    | /state/v1/selangor.json        | x      | [Test](https://jianliew.me/malaysia-api/state/v1/selangor.json)        |
| Terengganu                  | /state/v1/terengganu.json      | x      | [Test](https://jianliew.me/malaysia-api/state/v1/kelantan.json)        |
| Kuala Lumpur                | /state/v1/kuala_lumpur.json    | x      | [Test](https://jianliew.me/malaysia-api/state/v1/kuala_lumpur.json)    |
| Labuan                      | /state/v1/labuan.json          | x      | [Test](https://jianliew.me/malaysia-api/state/v1/labuan.json)          |
| Putrajaya                   | /state/v1/putrajaya.json       | x      | [Test](https://jianliew.me/malaysia-api/state/v1/putrajaya.json)       |

_x_ indicates that the entry is completed.

# Usage Example

```
const baseURL = "https://jianliew.me/malaysia-api/state/v1/all.json";

const NegeriM = () => {
  const [negeri, setNegeri] = useState();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNegeri(response.data);
    //   console.log(response.data);
    });
  }, []);
```