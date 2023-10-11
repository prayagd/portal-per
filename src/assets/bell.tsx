interface Props {
  color?: string;
}

const BellIcon = ({ color }: Props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill={color || 'none'} xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2675_1880)">
      <path d="M8 15.9999C8.53043 15.9999 9.03914 15.7892 9.41421 15.4141C9.78929 15.039 10 14.5303 10 13.9999H6C6 14.5303 6.21071 15.039 6.58579 15.4141C6.96086 15.7892 7.46957 15.9999 8 15.9999ZM8.995 1.0989C9.00896 0.959852 8.99362 0.819425 8.94997 0.686672C8.90632 0.553919 8.83533 0.431788 8.74158 0.328156C8.64783 0.224525 8.5334 0.141693 8.40567 0.0850029C8.27794 0.0283129 8.13974 -0.000976563 8 -0.000976562C7.86026 -0.000976563 7.72206 0.0283129 7.59433 0.0850029C7.4666 0.141693 7.35217 0.224525 7.25842 0.328156C7.16467 0.431788 7.09368 0.553919 7.05003 0.686672C7.00638 0.819425 6.99104 0.959852 7.005 1.0989C5.87472 1.3288 4.85862 1.94226 4.12876 2.8354C3.39891 3.72854 3.00015 4.84647 3 5.9999C3 7.0979 2.5 11.9999 1 12.9999H15C13.5 11.9999 13 7.0979 13 5.9999C13 3.5799 11.28 1.5599 8.995 1.0989Z" />
    </g>
    <defs>
      <path id="clip0_2675_1880">
        <rect width="16" height="16" fill="white" />
      </path>
    </defs>
  </svg>
);
export default BellIcon;
