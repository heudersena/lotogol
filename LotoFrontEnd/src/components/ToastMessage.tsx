
import toast from 'react-hot-toast';

export function ToastMessage({ message }): any {
    return (
        toast('message', {
            duration: 4000,
            position: 'top-left',

            // Styling
            style: {},
            className: '',

            // Custom Icon
            icon: '👏',

            // Change colors of success/error/loading icon
            iconTheme: {
                primary: '#000',
                secondary: '#fff',
            },

            // Aria
            ariaProps: {
                role: 'status',
                'aria-live': 'polite',
            },
        })
    )
}