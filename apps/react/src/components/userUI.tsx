import { Avatar, Badge, Tooltip, Typography } from '@material-tailwind/react';
import { size } from '@material-tailwind/react/types/components/avatar';
import { color } from '@material-tailwind/react/types/components/badge';
import { forwardRef } from 'react';
import { e_user_status } from './interfaces';

export const UserUI = forwardRef((props: any, ref: any) => {
	const {
		username,
		avatar,
		status,
		size,
		inverse = false,
		className,
		...otherProps
	}: {
		username: string;
		avatar: string | undefined;
		status: e_user_status;
		size?: size;
		inverse?: boolean;
		className: string;
		otherProps: any;
	} = props;

	let color: color | undefined;

	switch (status) {
		case e_user_status.OFFLINE:
			color = 'red';
			break;

		case e_user_status.ONLINE:
			color = 'green';
			break;

		case e_user_status.INGAME:
			color = 'orange';
			break;

		case e_user_status.INGAME:
			color = 'indigo';
			break;
	}

	return (
		<div ref={ref} className={`flex ${inverse ? 'flex-row-reverse' : ''} justify-start items-center ${className} gap-2`} {...otherProps}>
			<Badge overlap="circular" placement="bottom-end" color={color}>
				<Avatar variant="circular" alt={username} src={`${avatar}?t=${Date.now()}`} size={size} />
			</Badge>
			{size !== 'xs' && <p className="text-sm p-2">{username}</p>}
		</div>
	);
});
