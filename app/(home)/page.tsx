import Link from "next/link";
import styles from "./page.module.css";
import { API_BASE_URL } from "@/constants";

interface Book {
  list_name: string;
  display_name: string;
}

export const metadata = {
  title: "Category",
};

async function getBookLists() {
  const response = await fetch(`${API_BASE_URL}/lists`);
  const data = await response.json();
  return data;
}

export default async function Home() {
  const bookLists = await getBookLists();

  return (
    <div className={styles.container}>
      {bookLists.results.map((book: Book) => (
        <li key={book.list_name}>
          <Link href={`/list/${book.list_name}`}>{book.display_name}➡️</Link>
        </li>
      ))}
    </div>
  );
}
