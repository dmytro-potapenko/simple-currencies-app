import { Props, ReactFC } from '../types/types';

export function withProps<P extends Props, ProvidedProps extends Partial<P>>(props: ProvidedProps) {
    return (Component: ReactFC<P>): ReactFC<Omit<P, keyof ProvidedProps>> =>
        (p: Omit<P, keyof ProvidedProps>) => {
            const totalProps = { ...p, ...props } as unknown as P;
            return <Component {...totalProps} />;
        };
}
