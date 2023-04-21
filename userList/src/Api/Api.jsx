import axios from "axios";

export async function fetchUsers() {
  try {
    const fetchedResponse1 = await axios.get(
      `https://give-me-users-forever.vercel.app/api/users/1/next`
    );
    const fetchedResponse2 = await axios.get(
      `https://give-me-users-forever.vercel.app/api/users/3/next`
    );
    return fetchedResponse1.data.users.concat(fetchedResponse2.data.users);
  } catch (e) {
    alert("Check that the backend is running");
  }
}
