import fs from 'fs';
import path from 'path';

export default function Courses({ folderNames: course_titles }) {
  return (
    <ul>
      {course_titles.map((course_title, i) => (
        <li key={i}>{course_title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const coursesDirectory = path.join(__dirname, '..', '..', '..', 'courses');

  try {
    const files = await fs.promises.readdir(coursesDirectory);

    const folderNames = files.filter(async (file) => {
      const fullPath = path.join(coursesDirectory, file);
      const stats = await fs.promises.stat(fullPath);
      return stats.isDirectory();
    });
    console.log('Folder names inside "courses" directory:', folderNames);

    return {
      props: {
        folderNames
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}
