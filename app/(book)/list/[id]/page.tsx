import { API_BASE_URL } from "@/constants";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Lists",
};

interface BuyLink {
  name: string;
  url: string;
}

interface Book {
  title: string;
  contributor: string;
  book_image: string;
  primary_isbn13: string;
  primary_isbn10: string;
  buy_links: BuyLink[];
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function BookListByCategory({ params }: PageProps) {
  const { id } = params;
  async function getCoverList() {
    const response = await fetch(`${API_BASE_URL}/list?name=${id}`);
    const data = await response.json();
    return data;
  }
  const list = await getCoverList();
  console.log("list", list);

  return (
    <div className={styles.container}>
      <h1>{list.results.display_name}</h1>
      <div className={styles.bookContainer}>
        {list.results.books.map((book: Book) => (
          <div key={book.primary_isbn13} className={styles.book}>
            <div className={styles.bookImg}>
              <Image
                src={book.book_image}
                alt={book.title}
                width={128}
                height={192}
                className={styles.bookImg}
              />
            </div>
            <div className={styles.bookInfo}>
              <p>{book.title}</p>
              <p>{book.contributor}</p>
              <div className={styles.buy}>
                <span>Buy</span>
                <div className={styles.links}>
                  {book.buy_links.map((link) => (
                    <div key={link.url}>
                      <Link href={link.url}>{link.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
