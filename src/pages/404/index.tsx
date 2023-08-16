import type { PageConfig } from 'next';
import styles from './styles.module.css'
import Link from 'next/link';
import { AppRoutes } from '@/utils/routes';

export const config: PageConfig = { amp: false };

const Page404: React.FC = () => {

	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={styles.container}>
					<p className={styles.title}>404</p>
					<p className={styles.text}>Oops! The page you are looking for does not exist.</p>
					<p className={styles.text}>
						Go to <Link className={styles.link} href={AppRoutes.home}>index</Link> or go back to the previous page.
					</p>
				</div>
			</div>
		</>
	);
};

export default Page404;
