export default function ehObjetoVazio(obj) {
	if (obj === null || obj === undefined) {
		return true
	}

	const keys = Object.keys(obj)

	for (const key of keys) {
		if (obj[key] !== null && obj[key] !== undefined) {
			return false
		}
	}

	return true
}
