import React from 'react';

interface ButtonProps {
  label: string;
  isBorder?: boolean;
  borderColor?: string;
  className?: string;
};

export const Button :React.FC<ButtonProps> = ({ label, isBorder, borderColor, className }) => {
  return (
    <button
      className={`py-3 px-5 text-white w-32 ${
        isBorder ? 'border-2 rounded-lg' : ''
      } ${borderColor} ${className}`}
    >
      {label}
    </button>
  );
};

export const More = () => {
  const [backgroundColor, setBackgroundColor] = React.useState('');
  const [opacityList, setOpacityList] = React.useState([
    true,
    true,
    true,
    true,
    true,
  ]);

  React.useEffect(() => {
    setBackgroundColor('bg-dark-gray');

    setTimeout(() => {
      const newOpacityList = [true, true, true, true, false];

      setOpacityList([...newOpacityList]);
    }, 500);

    setTimeout(() => {
      const newOpacityList = [true, true, true, true, false];

      setOpacityList([...newOpacityList]);
    }, 550);

    setTimeout(() => {
      const newOpacityList = [true, true, true, false, false];

      setOpacityList([...newOpacityList]);
    }, 600);

    setTimeout(() => {
      const newOpacityList = [true, true, false, false, false];

      setOpacityList([...newOpacityList]);
    }, 630);

    setTimeout(() => {
      const newOpacityList = [true, false, false, false, false];

      setOpacityList([...newOpacityList]);
    }, 660);
    setTimeout(() => {
      const newOpacityList = [false, false, false, false, false];

      setOpacityList([...newOpacityList]);
    }, 690);

    return () => {
      setBackgroundColor('');
    };
  }, []);

  return (
    <main
      className={`fixed top-0 left-0 w-screen h-screen pt-24 px-4 ${backgroundColor} transition-colors`}
    >
      <section className="flex flex-col items-center gap-3">
        <Button
          className={`${
            opacityList[0] ? 'opacity-0 translate-y-3' : 'opacity-100'
          } text-white transition-all`}
          label={'홈'}
        />
        <Button
          className={`${
            opacityList[1] ? 'opacity-0 translate-y-3' : 'opacity-100'
          } text-white transition-all `}
          label={'서비스'}
        />
        <Button
          className={`${
            opacityList[2] ? 'opacity-0 translate-y-3' : 'opacity-100'
          } text-white transition-all `}
          label={'문의하기'}
        />
        <Button
          className={`${
            opacityList[3] ? 'opacity-0 translate-y-3' : 'opacity-100'
          } text-white transition-all `}
          label={'회원가입'}
          isBorder={true}
        />
        <Button
          className={`${
            opacityList[4] ? 'opacity-0 translate-y-3' : 'opacity-100'
          } text-white transition-all `}
          label={'로그인'}
          isBorder={true}
        />
      </section>
    </main>
  );
};
