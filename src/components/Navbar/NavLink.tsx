import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface IProps {
  name: string;
  link: string;
  active?: boolean;
}

export function NavbarLink(props: IProps) {
  return (
    <Link
      href={props.link}
      className="group cursor-pointer font-semibold text-red no-underline transition ease-in duration-300"
    >
      {props.name}
      <span
        className={twMerge(
          'block transition-all duration-500 h-0.5 bg-red',
          props.active ? 'max-w-full group-hover:max-w-0' : 'max-w-0 group-hover:max-w-full'
        )}
      ></span>
    </Link>
  );
}

export function NavbarLinkMobile(props: IProps) {
  return (
    <Link
      href={props.link}
      className={twMerge(
        'lg:hidden p-3 w-full rounded-md cursor-pointer font-semibold no-underline transition ease-in duration-300',
        props.active
          ? 'hover:bg-transparent hover:text-red bg-red text-white'
          : 'hover:bg-red hover:text-white bg-transparent text-red'
      )}
    >
      {props.name}
    </Link>
  );
}
