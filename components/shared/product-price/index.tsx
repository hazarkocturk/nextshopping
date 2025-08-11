import {cn} from '@/lib/utils';

const ProductPrice = ({value, className}: {value: number; className?: string}) => {
    const formattedValue = value.toFixed(2);
    const [intValue, decimalValue] = formattedValue.split('.');

    return (
        <p className={cn('text-2xl', className)}>
            <span className='text-xs align-super'>${intValue}</span>
            <span className='text-xs align-super'>.{decimalValue}</span>
        </p>
    )
    }

export default ProductPrice;