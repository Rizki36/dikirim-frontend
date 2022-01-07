const Truck = ({ is_active = false, ...props }) => {
  return (
    <svg
      height="24"
      width="32"
      fill="none"
      viewBox="0 0 32 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 1H13V4.88C13 5.17704 12.882 5.46192 12.672 5.67196C12.4619 5.882 12.177 6 11.88 6H8.12C7.82296 6 7.53808 5.882 7.32804 5.67196C7.118 5.46192 7 5.17704 7 4.88V1Z"
        className={`${is_active ? "fill-[#77ACF1]" : "fill-[#77ACF1]"}`}
      />
      <path
        d="M31.41 13L29.87 11.46L28.18 6.37C28.0475 5.97089 27.7926 5.62369 27.4515 5.37774C27.1105 5.13179 26.7005 4.99962 26.28 5H20V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3L0 18C0 18.7956 0.31607 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H4.14C4.38339 21.9427 4.96223 22.7642 5.76801 23.3106C6.57379 23.857 7.55119 24.0908 8.517 23.9681C9.48281 23.8454 10.3707 23.3747 11.0143 22.6442C11.6579 21.9137 12.013 20.9736 12.013 20C12.013 19.0264 11.6579 18.0863 11.0143 17.3558C10.3707 16.6253 9.48281 16.1546 8.517 16.0319C7.55119 15.9092 6.57379 16.143 5.76801 16.6894C4.96223 17.2358 4.38339 18.0573 4.14 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V19H15C14.7348 19 14.4804 19.1054 14.2929 19.2929C14.1054 19.4804 14 19.7348 14 20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21H21.14C21.3703 21.8474 21.873 22.5954 22.5706 23.1287C23.2682 23.6621 24.1219 23.951 25 23.951C25.8781 23.951 26.7318 23.6621 27.4294 23.1287C28.127 22.5954 28.6297 21.8474 28.86 21H30C30.5304 21 31.0391 20.7893 31.4142 20.4142C31.7893 20.0391 32 19.5304 32 19V14.41C31.9978 13.8804 31.7856 13.3734 31.41 13ZM8 18C8.39556 18 8.78224 18.1173 9.11114 18.3371C9.44004 18.5568 9.69638 18.8692 9.84776 19.2346C9.99913 19.6001 10.0387 20.0022 9.96157 20.3902C9.8844 20.7781 9.69392 21.1345 9.41421 21.4142C9.13451 21.6939 8.77814 21.8844 8.39018 21.9616C8.00222 22.0387 7.60009 21.9991 7.23463 21.8478C6.86918 21.6964 6.55682 21.44 6.33706 21.1111C6.1173 20.7822 6 20.3956 6 20C6 19.4696 6.21071 18.9609 6.58579 18.5858C6.96086 18.2107 7.46957 18 8 18ZM27.61 11H24V7H26.28L27.61 11ZM25 22C24.6044 22 24.2178 21.8827 23.8889 21.6629C23.56 21.4432 23.3036 21.1308 23.1522 20.7654C23.0009 20.3999 22.9613 19.9978 23.0384 19.6098C23.1156 19.2219 23.3061 18.8655 23.5858 18.5858C23.8655 18.3061 24.2219 18.1156 24.6098 18.0384C24.9978 17.9613 25.3999 18.0009 25.7654 18.1522C26.1308 18.3036 26.4432 18.56 26.6629 18.8889C26.8827 19.2178 27 19.6044 27 20C27 20.5304 26.7893 21.0391 26.4142 21.4142C26.0391 21.7893 25.5304 22 25 22ZM30 19H28.86C28.6297 18.1526 28.127 17.4046 27.4294 16.8713C26.7318 16.3379 25.8781 16.049 25 16.049C24.1219 16.049 23.2682 16.3379 22.5706 16.8713C21.873 17.4046 21.3703 18.1526 21.14 19H20V7H22V12C22 12.2652 22.1054 12.5196 22.2929 12.7071C22.4804 12.8946 22.7348 13 23 13H28.59L30 14.41V19Z"
        className={`${is_active ? "fill-[#FFF]" : "fill-[#39368E]"}`}
      />
    </svg>
  );
};

export default Truck;