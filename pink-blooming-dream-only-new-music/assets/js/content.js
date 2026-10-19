
/**
 * PINK BLOOMING DREAM - NOI DUNG DE CHINH SUA
 *
 * Them anh vinh vien: chep file vao assets/images/ va dien ten vao "file".
 * Vi du: { file: 'anh-me.jpg', caption: 'Khoanh khac ben me' }.
 * De file: '' de hien khung cho anh, tuyet doi khong su dung anh stock thay the.
 */
const SITE = {
  brand: 'Pink Blooming Dream',
  audioFile: 'nhac-nen-20-10.mp3',
  mascotName: 'Mimi Bloom',
  finaleMessage: 'Mong bạn luôn xinh đẹp theo cách của riêng mình, mạnh mẽ khi cần và dịu dàng với chính mình. Chúc bạn thật nhiều niềm vui và hạnh phúc!'
};

const SCENES = [
  { id: 'intro', title: 'Mở món quà' },
  { id: 'celebrate', title: 'Ngày của bạn' },
  { id: 'garden', title: 'Bạn hoa nhỏ' },
  { id: 'memories', title: 'Khoảnh khắc' },
  { id: 'wishes', title: 'Lời chúc' },
  { id: 'gift', title: 'Bó hoa nhỏ' },
  { id: 'finale', title: 'Yêu thương' },
];

const GARDEN_LINES = [
  'Mỗi người phụ nữ đều là một bông hoa...',
  'Mang trong mình những vẻ đẹp và câu chuyện riêng.',
  'Và tất cả đều xứng đáng được yêu thương, trân trọng và hạnh phúc.',
  'Hôm nay, Mimi ở đây chỉ để nhắc bạn rằng: bạn rất đáng yêu đó!'
];

const MASCOT_MOODS = [
  { key: 'smile', text: 'Chào bạn nè ♡' },
  { key: 'wink', text: 'Hehe, bạn đáng yêu quá! ✨' },
  { key: 'kiss', text: 'Nhận một trái tim nhé! 💗' },
  { key: 'spark', text: 'Lấp lánh lên nào! 🌸' },
  { key: 'surprise', text: 'Wow, hôm nay thật xinh!' },
];

const GALLERY = [
  { file: '', caption: 'Nụ cười rạng rỡ', note: 'Góc nhỏ lưu giữ yêu thương' },
  { file: '', caption: 'Những phút giây đáng nhớ', note: 'Mỗi khoảnh khắc đều thật đẹp' },
  { file: '', caption: 'Ngày hôm nay thật xinh', note: 'Một chút ngọt ngào gửi đến bạn' },
  { file: '', caption: 'Cùng nhau tỏa sáng', note: 'Những kỷ niệm luôn ở đây' },
  { file: '', caption: 'Bình yên và hạnh phúc', note: 'Chuyện nhỏ, niềm vui to' },
];

const WISHES = [
  { icon: '🌷', title: 'Rạng rỡ', short: 'Gửi những điều xinh đẹp', text: 'Chúc bạn luôn rạng rỡ, tự tin và hạnh phúc theo cách riêng của mình!' },
  { icon: '💗', title: 'Bình yên', short: 'Gửi một ngày an yên', text: 'Mong rằng mỗi ngày của bạn đều ngập tràn niềm vui, sự bình yên và những điều tốt đẹp.' },
  { icon: '✨', title: 'Tỏa sáng', short: 'Gửi những tia nắng ấm', text: 'Chúc một nửa xinh đẹp của thế giới luôn được yêu thương, trân trọng và tỏa sáng.' },
  { icon: '🌸', title: 'Tự hào', short: 'Gửi một cái ôm thật ấm', text: 'Hãy luôn mỉm cười, theo đuổi ước mơ và tự hào về chính mình nhé!' },
  { icon: '🎀', title: 'Yêu thương', short: 'Gửi một điều dịu dàng', text: 'Không chỉ riêng ngày 20/10, mong những điều dịu dàng nhất sẽ đến với bạn mỗi ngày.' },
];
