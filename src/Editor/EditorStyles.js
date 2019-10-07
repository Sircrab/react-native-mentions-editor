import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    editorContainer: {
      flex: 1
    },
    input: {
        fontSize: 16,
        backgroundColor: 'transparent',
        color: 'transparent',
        fontWeight: '400',
        paddingHorizontal: 20,
        minHeight: 40,
        flex: 1,
        zIndex: 20
    },
    formmatedTextWrapper: {
        zIndex: 10,
        minHeight: 40,
        position: 'absolute',
        top: 0,
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: Platform.OS === 'android' ? 10 : 5
    },
    formmatedText: {
        fontSize: 16,
        fontWeight: '400',
    },
    mention: {
        fontSize: 16,
        fontWeight: '400',
        backgroundColor: 'rgba(36, 77, 201, 0.05)',
        color: '#244dc9',
    },
    placeholderText: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 16,
    }

})
