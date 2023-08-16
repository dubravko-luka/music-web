import Head from 'next/head';
import { memo } from 'react';

const HeadDocs: React.FC = () => {
	const logo = '/images/logos/1600x900.png';
	const title = 'TuneScape';
	const description =
		'Khám phá vô tận thế giới âm nhạc với ứng dụng nghe nhạc trực tuyến của chúng tôi. Thỏa sức thể hiện đam mê âm nhạc của bạn và tạo nên những khoảnh khắc đáng nhớ. Với thư viện nhạc phong phú và đa dạng, bạn có thể dễ dàng tìm thấy những bản nhạc yêu thích từ mọi thể loại, từ nhạc Pop sôi động đến những giai điệu Rock mạnh mẽ hay những giai điệu nhẹ nhàng của Acoustic. Đặc biệt, bạn có thể tạo ra những danh sách nhạc riêng biệt cho mọi tâm trạng và dịp khác nhau. Không chỉ nghe, ứng dụng còn cho phép bạn tải xuống nhạc để có thể thưởng thức cả khi offline. Đồng thời, khám phá tính năng hình nền nghe nhạc độc đáo, cho phép bạn tạo ra một trải nghiệm đồng thuận giữa âm thanh và hình ảnh. Hãy cùng chúng tôi trải nghiệm âm nhạc một cách hoàn toàn mới và đắm chìm trong không gian âm nhạc tuyệt vời.';
	const site = `https://tunescape.vercel.app`;

	return (
		<Head>
			<title>{title}</title>

			{/* Z */}
			<meta name="og:image" content={`${site}${logo}`} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content={site} />

			{/* F */}
			<meta property="og:image" content={`${site}${logo}`} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={site} />

			{/* T */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:image" content={`${site}${logo}`} />
			<meta name="twitter:title" content={`${title}`} />
			<meta name="twitter:description" content={`${description}`} />
			<meta name="twitter:site" content={site} />
		</Head>
	);
};

export default memo(HeadDocs);
