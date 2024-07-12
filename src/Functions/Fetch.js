
const url="https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple"

export const fetchdata = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  