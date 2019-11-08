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
        fontSize: 17,
        backgroundColor: 'transparent',
        color: 'transparent',
        fontWeight: 'normal',
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
        fontSize: 17,
    },
    mention: {
        fontSize: 17,
        color: '#53B0FF',
        backgroundColor: '#c9e6ff',
        // Simulate a fontWeight of bold
        textShadowColor: '#53B0FF',
        textShadowRadius: 1,
        textShadowOffset: { width: -0.04, height: 0 },
    },
    placeholderText: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 16,
    },
    title: {
        fontSize: 17,
        // Simulate a fontWeight of 600
        textShadowColor: '#000000',
        textShadowRadius: 1,
        textShadowOffset: { width: -0.02, height: 0 },
    },
    atButton: {
        textAlign: 'center',
        padding: 12,
        fontSize: 17,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        position: 'absolute',
        bottom: 12,
        left: 12
    }
})
