import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function ToolBarItem(props) {

	function onPressItemHandler() {
		props.onPress(props.name, props.type);
	}

	return (
		<View style={styles.item}>
			<FontAwesome.Button
				name={props.name}
				backgroundColor={props.disable ? '#FFFFFF' : '#000000'}
				color={props.disable ? '#000000' : '#FFFFFF'}
				size={32}
				borderRadius={40}
				iconStyle={styles.icon}
				onPress={onPressItemHandler}
			></FontAwesome.Button>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		flex: 1,
		// borderWidth: 1,
		// borderColor: 'red',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		marginRight: 0,
	}
});