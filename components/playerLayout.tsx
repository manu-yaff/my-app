import { Box } from '@chakra-ui/layout';
import Sidebar from './sidebar';
import React from 'react';

const PlayerLayout = ({ children }) => {
	return (
		<Box width="100vw" height="100vh">
			<Box position="absolute" top="0" width="250px" left="0">
				<Sidebar />
			</Box>
			<Box marginLeft="250px" marginBottom="100px">
				{children}
				here goes home
			</Box>
			<Box position="absolute" left="0" bottom="0">
				this is the player
			</Box>
		</Box>
	);
};

export default PlayerLayout;
