import styles from './visitor.module.css';

export default function VisitorPage() {
  return (
    <div className={styles.visitorDiv}>
      <h2>Visitor</h2>

      <table className={styles.visitorTable}>
        <thead>
          <tr>
            <th>number</th>
            <th>title</th>
            <th>author</th>
            <th>date</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>제목입니다.</td>
            <td>운영자</td>
            <td>2023.12.18</td>
            <td>320</td>
          </tr>
          <tr>
            <td>1</td>
            <td>제목입니다.</td>
            <td>운영자</td>
            <td>2023.12.18</td>
            <td>320</td>
          </tr>
          <tr>
            <td>1</td>
            <td>제목입니다.</td>
            <td>운영자</td>
            <td>2023.12.18</td>
            <td>320</td>
          </tr>
          <tr>
            <td>1</td>
            <td>제목입니다.</td>
            <td>운영자</td>
            <td>2023.12.18</td>
            <td>320</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
