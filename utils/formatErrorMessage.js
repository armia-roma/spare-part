module.exports = (error) => {
	return error.details.map((detail) => {
		return {
			field: detail.context.key,
			message: detail.message,
		};
	});
};
// return message.replace(/\"/g, '')
